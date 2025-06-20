// Main SDK export
export { GoFrugalSDK } from './client/gofrugal-sdk';
export * from './types';

// Runtime detection utility
export function detectRuntime(): 'bun' | 'deno' | 'browser' | 'node' {
  if (typeof Bun !== 'undefined') return 'bun';
  if (typeof Deno !== 'undefined') return 'deno'; 
  if (typeof window !== 'undefined') return 'browser';
  return 'node';
}
