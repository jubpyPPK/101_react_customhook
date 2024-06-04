import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputText from './InputText';

describe('InputText Component', () => {
  const mockOnChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <InputText
        name='test'
        placeholder='Test Placeholder'
        value=''
        onChange={mockOnChange}
        error=''
        id={'id-999'}
        label={'Test Label'}
        type={'text'}
      />
    );
  });

  it('renders with correct props', () => {
    const { getByPlaceholderText } = render(
      <InputText
        name='test'
        placeholder='Test Placeholder'
        value=''
        onChange={mockOnChange}
        error=''
        id={'id-999'}
        label={'Test Label'}
        type={'text'}
      />
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  it('calls onChange callback when input value changes', () => {
    const { getByPlaceholderText } = render(
      <InputText
        name='test'
        placeholder='Test Placeholder'
        value=''
        onChange={mockOnChange}
        error=''
        id={'id-999'}
        label={'Test Label'}
        type={'text'}
      />
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByPlaceholderText('Test Placeholder');
    fireEvent.change(input, { target: { value: 'Test Value' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: 'Test Value' } })
    );
  });

  it('applies invalid styling when error is present', () => {
    const { getByPlaceholderText } = render(
      <InputText
        name='test'
        placeholder='Test Placeholder'
        value=''
        onChange={mockOnChange}
        error='Error message'
        id={'id-999'}
        label={'Test Label'}
        type={'text'}
      />
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByPlaceholderText('Test Placeholder');

    expect(input).toHaveStyle('border-color: red');
  });

  it('does not apply invalid styling when error is not present', () => {
    const { getByPlaceholderText } = render(
      <InputText
        name='test'
        placeholder='Test Placeholder'
        value=''
        onChange={mockOnChange}
        error=''
        id={'id-999'}
        label={'Test Label'}
        type={'text'}
      />
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByPlaceholderText('Test Placeholder');

    expect(input).not.toHaveStyle('border-color: red');
  });
});
