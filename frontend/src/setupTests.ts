import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock dialog implementation
Element.prototype.scrollIntoView = vi.fn();

// Setup global mocks if needed
vi.mock('axios');