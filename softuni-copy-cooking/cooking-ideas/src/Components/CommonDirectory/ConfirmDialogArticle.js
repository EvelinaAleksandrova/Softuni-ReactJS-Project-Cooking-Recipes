import {Button, Modal} from 'react-bootstrap';

const ConfirmDialogArticle = ({
                           show,
                           onClose,
                           onSave
                       }) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Article</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Do you want to Delete this article?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>No</Button>
                <Button variant="primary" onClick={onSave}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialogArticle;