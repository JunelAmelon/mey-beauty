import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from './firebase.js';

async function collectionHasAnyDocs(path) {
  const q = query(collection(db, path), limit(1));
  const snap = await getDocs(q);
  return snap.size > 0;
}

export function listenProducts(onData, onError) {
  const q = query(collection(db, 'products'), orderBy('updatedAt', 'desc'));
  return onSnapshot(
    q,
    (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      onData(list);
    },
    onError
  );
}

export async function upsertProduct(product) {
  const id = String(product.id || '').trim();
  if (!id) throw new Error('Missing product id');
  const ref = doc(db, 'products', id);
  await setDoc(
    ref,
    {
      ...product,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

export async function deleteProduct(id) {
  await deleteDoc(doc(db, 'products', id));
}

export function listenPosts(onData, onError) {
  const q = query(collection(db, 'posts'), orderBy('updatedAt', 'desc'));
  return onSnapshot(
    q,
    (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      onData(list);
    },
    onError
  );
}

export async function upsertPost(post) {
  const id = String(post.id || '').trim();
  if (!id) throw new Error('Missing post id');
  const ref = doc(db, 'posts', id);
  await setDoc(
    ref,
    {
      ...post,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

export async function seedProductsIfEmpty(products) {
  const hasAny = await collectionHasAnyDocs('products');
  if (hasAny) return { seeded: false, count: 0 };
  const list = Array.isArray(products) ? products : [];
  await Promise.all(
    list
      .filter((p) => p && String(p.id || '').trim())
      .map((p) =>
        upsertProduct({
          ...p,
          status: p.status || 'active',
        })
      )
  );
  return { seeded: true, count: list.length };
}

export async function seedPostsIfEmpty(posts) {
  const hasAny = await collectionHasAnyDocs('posts');
  if (hasAny) return { seeded: false, count: 0 };
  const list = Array.isArray(posts) ? posts : [];
  await Promise.all(
    list
      .filter((p) => p && String(p.id || '').trim())
      .map((p) =>
        upsertPost({
          ...p,
          status: p.status || 'published',
        })
      )
  );
  return { seeded: true, count: list.length };
}

export async function seedPostsMerge(posts) {
  const list = Array.isArray(posts) ? posts : [];
  await Promise.all(
    list
      .filter((p) => p && String(p.id || '').trim())
      .map((p) =>
        upsertPost({
          ...p,
          status: p.status || 'published',
        })
      )
  );
  return { merged: true, count: list.length };
}

export async function seedProductsMerge(products) {
  const list = Array.isArray(products) ? products : [];
  await Promise.all(
    list
      .filter((p) => p && String(p.id || '').trim())
      .map((p) =>
        upsertProduct({
          ...p,
          status: p.status || 'active',
        })
      )
  );
  return { merged: true, count: list.length };
}

export async function deletePost(id) {
  await deleteDoc(doc(db, 'posts', id));
}
