import { describe, test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharacterForm from '../components/CharacterForm';
import '@testing-library/jest-dom';

describe('CharacterForm Component', () => {
  test('renders input fields and button', () => {
    render(<CharacterForm />);

    const nameInput = screen.getByPlaceholderText('Nombre');
    const speciesInput = screen.getByPlaceholderText('Especie');
    const statusSelect = screen.getByRole('combobox');
    const fileInput = screen.getByLabelText('Seleccionar Imagen');
    const submitButton = screen.getByRole('button', { name: /crear personaje/i });

    expect(nameInput).toBeInTheDocument();
    expect(speciesInput).toBeInTheDocument();
    expect(statusSelect).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('allows user input', async () => {
    render(<CharacterForm />);
    const user = userEvent.setup();

    const nameInput = screen.getByPlaceholderText('Nombre') as HTMLInputElement;
    const speciesInput = screen.getByPlaceholderText('Especie') as HTMLInputElement;
    const statusSelect = screen.getByRole('combobox') as HTMLSelectElement;

    await user.clear(nameInput); // Asegura que el campo esté limpio antes de escribir
    await user.type(nameInput, 'Morty');
    await user.clear(speciesInput);
    await user.type(speciesInput, 'Human');
    await user.selectOptions(statusSelect, 'Dead');

    expect(nameInput.value).toBe('Morty');
    expect(speciesInput.value).toBe('Human');
    expect(statusSelect.value).toBe('Dead');
  });

  test('shows message on successful submission', async () => {
    render(<CharacterForm />);
    const user = userEvent.setup();

    const nameInput = screen.getByPlaceholderText('Nombre');
    const speciesInput = screen.getByPlaceholderText('Especie');
    const statusSelect = screen.getByRole('combobox');
    const submitButton = screen.getByRole('button', { name: /crear personaje/i });

    await user.clear(nameInput);
    await user.type(nameInput, 'Rick');
    await user.clear(speciesInput);
    await user.type(speciesInput, 'Human');
    await user.selectOptions(statusSelect, 'Alive');
    await user.click(submitButton);

    // Verificar que el mensaje de éxito aparece
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/personaje creado exitosamente/i);
    });
  });
});
