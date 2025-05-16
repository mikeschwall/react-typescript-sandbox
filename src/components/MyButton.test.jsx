// example.test.ts

import MyButton from "./MyButton";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

describe('Test Suite MyButton', () => {
    test('test if its on the page', () => {
      
        render(<MyButton></MyButton>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        
    });
  });
  