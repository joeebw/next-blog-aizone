import { FormattedPostType } from "@/app/types";
import { Editor } from "@tiptap/react";
import React from "react";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

type Props = {
  isEditable: boolean;
  handleIsEditable: (bool: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  tempTitle: string;
  setTempTitle: (title: string) => void;
  tempContent: string;
  setTempContent: (content: string) => void;
  editor: Editor | null;
  post: FormattedPostType;
};

const CategoryAndEdit = (props: Props) => {
  const {
    isEditable,
    handleIsEditable,
    title,
    setTitle,
    tempTitle,
    setTempTitle,
    tempContent,
    setTempContent,
    editor,
    post,
  } = props;

  const handleEnableEdit = () => {
    handleIsEditable(!isEditable);
    setTempTitle(title);
    // * getHtml will get the content inside the editor.
    setTempContent(editor?.getHTML() || "");
  };

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="py-1 px-8 bg-accent-orange">
        <span className="font-bold">{post.category}</span>
      </div>
      {isEditable ? (
        <button onClick={handleCancelEdit}>
          <XMarkIcon className="w-6 h-6 text-accent-red" />
        </button>
      ) : (
        <button onClick={handleEnableEdit}>
          <PencilSquareIcon className="w-6 h-6 text-accent-red" />
        </button>
      )}
    </div>
  );
};

export default CategoryAndEdit;
