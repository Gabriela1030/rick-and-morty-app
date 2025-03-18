import React, { useState } from 'react';
import { sendCharacterData } from '../services/webhookService';
import styles from '../styles/CharacterForm.module.css';

const CharacterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Alive');
  const [species, setSpecies] = useState('Human');
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (image && !image.type.startsWith('image/')) {
      setMessage('Por favor, selecciona un archivo de imagen válido.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('status', status);
    formData.append('species', species);
    if (image) formData.append('image', image);

    try {
      const success = await sendCharacterData(formData);

      if (success) {
        setMessage('Personaje creado exitosamente');
        setName('');
        setStatus('Alive');
        setSpecies('Human');
        setImage(null);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMessage('Error al enviar el formulario. Por favor, intenta de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} required>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>
      <input
        type="text"
        placeholder="Especie"
        value={species}
        onChange={(e) => setSpecies(e.target.value)} 
        required
      />
      
      <label className={styles.fileLabel}>
        Seleccionar Imagen
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          required
          className={styles.fileInput}
        />
      </label>
      {image && <p className={styles.fileName}>{image.name}</p>}

      <button type="submit">Crear Personaje</button>
      {message && <p role="alert" className={styles.message}>{message}</p>} 
    </form>
  );
};

export default CharacterForm;
