"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import UploadDocumentForm from "./upload-document-form";
import { useState } from "react";
export default function CreateDocumentButton() {
  const documents = useQuery(api.documents.getDocuments);
  const createDocument = useMutation(api.documents.creteDocument);

  // state for closing the dialog when the user clicks outside of it
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AlertDialog onOpenChange={setIsOpen} open={isOpen}>
        <AlertDialogTrigger asChild>
          {/*TODO:  AS CHILD */}
          <Button>Upload Documents</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Upload Your Document to Ameliea
            </AlertDialogDescription>
          </AlertDialogHeader>

          <UploadDocumentForm onUpload={() => setIsOpen(false)} />
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
