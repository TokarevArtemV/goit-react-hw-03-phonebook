import { PureComponent } from 'react';
import { ModalContent } from './ModalContent';
import css from './Modal.module.css';

export class Modal extends PureComponent {
  render() {
    return (
      <div className={css.modal}>
        <ModalContent {...this.props} />
      </div>
    );
  }
}
