"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Button,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

import axios from "axios";
import { toast } from "sonner";

const ContactDetails = () => {
  const [contact, setContact] = useState([]);
  const [singleContact, setSingleContact] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  console.log(singleContact)

  const getContactDetails = async () => {
    try {
      const response = await axios.post("/api/v1/admin/getcontactdetails",{});
      const result = response.data;
      setContact(result);
    } catch {
      toast("Data fetch failed");
    }
  };

  const getSingleContactDetails = async (id) => {
    try {
      const response = await axios.get(
        `/api/v1/admin/getsinglecontactdetails/${id}`
      );
      const result = response.data;
      setSingleContact(result);
    } catch {
      toast("Data fetch failed");
    }
  };

  const loadingState = contact?.length === 0 ? "loading" : "idle";

  useEffect(() => {
    getContactDetails();
  }, []);
  return (
    <>
      {" "}
      <Table
        aria-label="Example table with client async pagination"
        className="px-8 py-8 min-h-screen pt-24"
      >
        <TableHeader>
          <TableColumn key="created_At">Submited At</TableColumn>
          <TableColumn key="name">First Name</TableColumn>
          <TableColumn key="email">Last Name</TableColumn>
          <TableColumn key="Role">Phone</TableColumn>
          <TableColumn key="Switch_Role">View Details</TableColumn>
        </TableHeader>
        <TableBody
          items={contact ?? []}
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(item) => (
            <TableRow key={item?._id}>
              <TableCell>
                {new Date(item?.createdAt).toISOString().slice(0, 10)}
              </TableCell>
              <TableCell>{item?.firstName}</TableCell>
              <TableCell>{item?.lastName}</TableCell>
              <TableCell>{item?.phone}</TableCell>
              <TableCell>
                <Button
                  key={item?._id}
                  redius="sm"
                  color="primary"
                  onPress={() => {
                    onOpen();
                    getSingleContactDetails(item?._id);
                  }}
                >
                  View details
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <Table aria-label="Example table with client async pagination">
                  <TableHeader>
                    <TableColumn key="created_At">Email</TableColumn>
                    <TableColumn key="name">Address</TableColumn>
                    <TableColumn key="email">message</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>{singleContact?.email}</TableCell>
                      <TableCell>{singleContact?.address}</TableCell>
                      <TableCell>{singleContact?.message}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactDetails;

