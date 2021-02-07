import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  // ModalFooter,
  ModalBody,
  ModalCloseButton,
  Wrap,
  WrapItem,
  Center,
  Text,
  Box,
} from "@chakra-ui/react";
import { getDate } from "../../helperMethod";
import styles from "./styles.module.scss";
const BatchModal = ({ isOpen, onClose, batches }) => {
  return (
    <Modal isOpen={isOpen} size="lg" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Batches</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Wrap>
            {batches?.length > 0 ? (
              batches.map((batch, key) => (
                <WrapItem key={key}>
                  <Box
                    w="200px"
                    h="100px"
                    bg="tomato"
                    className={styles.modalBox}
                  >
                    <Text>
                      Start Date: {`${getDate(batch.startDate, true)}`}
                    </Text>
                    <Text>End Date: {`${getDate(batch.endDate, true)}`}</Text>
                  </Box>
                </WrapItem>
              ))
            ) : (
              <p>No batches available right now.</p>
            )}
          </Wrap>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BatchModal;
