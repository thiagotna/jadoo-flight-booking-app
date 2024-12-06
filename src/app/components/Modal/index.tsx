import React from 'react';
import styled from 'styled-components';
import { CircleX } from 'lucide-react';

const ModalBackground = styled.div``;
const ModalHeader = styled.div``;
const ModalBody = styled.div``;
const ModalFooter = styled.div``;

interface ModalProps {
  showModal: boolean;
  onRequestClose: () => void //Create a useState to handle the modal state;
  title: string;
  children: React.ReactNode;
  footerContent: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ 
  showModal, 
  onRequestClose, 
  title, 
  children, 
  footerContent 
}) => {
  
  return showModal ? (
        <ModalBackground onClick={onRequestClose}>
          <ModalHeader>
            <h5>{ title }</h5> <CircleX onClick={onRequestClose} />
          </ ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
          { footerContent && (
            <ModalFooter>
            { footerContent }
          </ ModalFooter>
          )}          
        </ModalBackground>
      ) : null;   
}