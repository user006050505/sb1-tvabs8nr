import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Image } from 'react-bootstrap';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  previewUrl?: string;
  label: string;
}

export default function ImageUpload({ onImageUpload, previewUrl, label }: ImageUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      onImageUpload(acceptedFiles[0]);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxSize: 5242880, // 5MB
    multiple: false
  });

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div
        {...getRootProps()}
        className={`border rounded-3 p-4 text-center cursor-pointer ${
          isDragActive ? 'border-primary border-2' : 'border-secondary'
        }`}
      >
        <input {...getInputProps()} />
        {previewUrl ? (
          <div className="text-center">
            <Image
              src={previewUrl}
              alt="Preview"
              className="mb-2"
              style={{ maxHeight: '150px', width: 'auto' }}
            />
            <p className="mb-0 text-muted">Click or drag to replace</p>
          </div>
        ) : (
          <div className="text-center">
            <Upload size={32} className="mb-2 text-secondary" />
            <p className="mb-0">
              {isDragActive
                ? 'Drop the image here'
                : 'Click or drag an image here to upload'}
            </p>
            <p className="text-muted small mb-0">
              Maximum file size: 5MB
            </p>
          </div>
        )}
      </div>
    </div>
  );
}