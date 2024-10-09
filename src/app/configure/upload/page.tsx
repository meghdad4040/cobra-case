"use client";

import { cn } from "@/lib/utils";
import { Image, Loader, MousePointerSquareDashed } from "lucide-react";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

const page = () => {
	const [isDragOver, setIsDragOver] = useState<boolean>(false);
	const onDropREjected = () => {};
	const onDropAccepted = () => {
		console.log("accept");
	};
	const isUploading = false;
	const [isPending, startTransition] = useTransition();

	return (
		<div
			className={cn(
				`relative h-full flex-1 my-16 w-full rounded-xl
     bg-gray-900/20 dark:bg-gray-950/30 p-2 ring-1 ring-inset ring-gray-900/10 
     lg:rounded-2xl flex justify-center flex-col items-center`,
				{ "ring-blue-900/25 bg-blue-900/10": isDragOver },
			)}>
			<div className=' relative flex flex-1 flex-col items-center justify-center w-full'>
				<Dropzone
					onDropRejected={onDropREjected}
					onDropAccepted={onDropAccepted}
					accept={{
						"image/png": [".png"],
						"image/jpeg": [".jpeg"],
						"image/jpg": [".jpg"],
					}}
					onDragEnter={() => setIsDragOver(true)}
					onDragLeave={() => setIsDragOver(false)}>
					{({ getRootProps, getInputProps }) => (
						<div
							className=' h-full w-full flex-1 flex flex-col 
      items-center justify-center'
							{...getRootProps()}>
							<input {...getInputProps()} />
							{isDragOver ? (
								<MousePointerSquareDashed className=' h-6 w-6 text-zinc-500 mb-2' />
							) : isUploading || isPending ? (
								<Loader className=' animate-spin h-6 w-6 text-zinc-500 mb-2' />
							) : (
								<Image className=' h-6 w-6 text-zinc-500 mb-2' />
							)}
       <div className=" flex flex-col justify-center mb-2 text-sm text-zinc-700">
        {isUploading?<div></div> : isPending ? <div></div>: isDragOver ? <span></span>:<span></span>}
       </div>
						</div>
					)}
				</Dropzone>
			</div>
		</div>
	);
};

export default page;
