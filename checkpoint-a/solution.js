// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter((order) => order.city === "Cairo" && order.status === "cancelled");
}

export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }
  return orders.reduce((maxPrice, order) => (order.price > maxPrice ? order.price : maxPrice), 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    const { student, quantity, item } = order;
    return `${student} ordered ${quantity} x ${item}`;
  } catch {
    return `Order ${id} not found`;
  }
}

export function toJsonLines(orders) {
  const projected = orders.map(({ student, city }) => ({ student, city }));
  return JSON.stringify(projected);
}