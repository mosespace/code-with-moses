import Link from "next/link";
import toast from "react-hot-toast";
import { BsPaperclip, BsPencil } from "react-icons/bs";
import { UploadDropzone } from "@/utils/uploadthing";

export default function AttachmentFileInput({
  label,
  fileUrl = "",
  setFileUrl,
  className = "col-span-full",
  endpoint = "",
  register

}) {
  return (
    <div className={className}>
      <div className='flex justify-between items-center mb-4'>
        <label
          htmlFor='attachment'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          {label}
        </label>
        {fileUrl && (
          <button
            onClick={() => setFileUrl("")}
            type='button'
            className='flex space-x-2  bg-amber-600 rounded-md shadow text-slate-50  py-2 px-4'
          >
            <BsPencil className='w-5 h-5' />
            <span>Change File</span>
          </button>
        )}
      </div>
      {fileUrl ? (
        <Link
          href={fileUrl}
          target='_blank'
          className='text-amber-600 flex items-center space-x-3'
        >
          <BsPaperclip className='w-8 h-8 ' />
          <span>View File Here</span>
        </Link>
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            setFileUrl(res[0].url);
            toast.success("Upload Completed");
          }}
          onUploadError={(error) => {
            console.log(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
}
