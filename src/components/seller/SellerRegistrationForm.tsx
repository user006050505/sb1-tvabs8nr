import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Building2, Mail, Phone, MapPin, Factory, Award } from 'lucide-react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { sellerSchema, type Seller, businessCategories, productCategories } from '../../types/seller';
import ImageUpload from './ImageUpload';

export default function SellerRegistrationForm() {
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);
  const [companyLogoPreview, setCompanyLogoPreview] = useState<string>('');
  const [businessPhotos, setBusinessPhotos] = useState<File[]>([]);
  const [businessPhotosPreviews, setBusinessPhotosPreviews] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Seller>({
    resolver: zodResolver(sellerSchema),
  });

  const handleCompanyLogoUpload = (file: File) => {
    setCompanyLogo(file);
    setCompanyLogoPreview(URL.createObjectURL(file));
  };

  const handleBusinessPhotoUpload = (file: File) => {
    setBusinessPhotos(prev => [...prev, file]);
    setBusinessPhotosPreviews(prev => [...prev, URL.createObjectURL(file)]);
  };

  const onSubmit = async (data: Seller) => {
    try {
      const formData = new FormData();
      if (companyLogo) {
        formData.append('companyLogo', companyLogo);
      }
      businessPhotos.forEach((photo, index) => {
        formData.append(`businessPhoto${index}`, photo);
      });
      formData.append('data', JSON.stringify(data));
      
      console.log('Form data:', formData);
      // TODO: Implement API call
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mb-5">
      <Card className="mb-4">
        <Card.Header className="bg-primary text-white">
          <h5 className="mb-0">Company Images</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <ImageUpload
                label="Company Logo"
                onImageUpload={handleCompanyLogoUpload}
                previewUrl={companyLogoPreview}
              />
            </Col>
            <Col md={6}>
              <ImageUpload
                label="Business Photos"
                onImageUpload={handleBusinessPhotoUpload}
                previewUrl={businessPhotosPreviews[0]}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Basic Information */}
      <Card className="mb-4">
        <Card.Header className="bg-primary text-white">
          <h5 className="mb-0">Basic Information</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Business Name *</Form.Label>
                <Form.Control
                  type="text"
                  {...register('businessName')}
                  isInvalid={!!errors.businessName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.businessName?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Business Type *</Form.Label>
                <Form.Select {...register('businessType')} isInvalid={!!errors.businessType}>
                  <option value="">Select business type</option>
                  {businessCategories.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.businessType?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Contact Information */}
      <Card className="mb-4">
        <Card.Header className="bg-primary text-white">
          <h5 className="mb-0">Contact Information</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  {...register('email')}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number *</Form.Label>
                <Form.Control
                  type="tel"
                  {...register('phone')}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Product Information */}
      <Card className="mb-4">
        <Card.Header className="bg-primary text-white">
          <h5 className="mb-0">Product Information</h5>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label>Product Categories *</Form.Label>
            <div className="mb-3">
              {productCategories.map((category) => (
                <Form.Check
                  key={category}
                  type="checkbox"
                  inline
                  label={category}
                  value={category}
                  {...register('products.categories')}
                  className="me-3"
                />
              ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Major Products Description *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register('products.majorProducts')}
              isInvalid={!!errors.products?.majorProducts}
            />
            <Form.Control.Feedback type="invalid">
              {errors.products?.majorProducts?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Card.Body>
      </Card>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Complete Registration'}
        </Button>
      </div>
    </Form>
  );
}