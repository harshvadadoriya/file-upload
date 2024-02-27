import { useState } from 'react';
import { Input } from '@chakra-ui/react';
import FileProgress from '../fileProgress';

type TypeFileBlob = {
	file: string;
	content: string | ArrayBuffer | null;
};

const FileUpload = () => {
	const [isFileLoader, setIsFileLoader] = useState<boolean>(false);
	const [fileState, setFileState] = useState<string>('');
	const [fileBlob, setFileBlob] = useState<TypeFileBlob>();

	let fileRead: FileReader;

	const handleFile = () => {
		setFileBlob({
			file: 'file',
			content: fileRead.result,
		});
		setIsFileLoader(false);
	};

	const handleFileLoadStart = () => {
		setIsFileLoader(true);
	};

	const fileContent = (e) => {
		setFileState(e.target.files[0]);
		fileRead = new FileReader();
		fileRead.onloadend = handleFile;
		fileRead.onloadstart = handleFileLoadStart;
		fileRead.readAsText(e.target.files[0]);
	};

	console.log(isFileLoader);

	return (
		<>
			<h1>File Upload</h1>
			<Input type="file" onChange={(e) => fileContent(e)} />
			<FileProgress isFileLoader={isFileLoader} />
		</>
	);
};

export default FileUpload;
