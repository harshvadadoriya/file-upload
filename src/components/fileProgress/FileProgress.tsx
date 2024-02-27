type TypeFileProgressProps = {
	isFileLoader: boolean;
};

const FileProgress = ({ isFileLoader }: TypeFileProgressProps) => {
	return (
		<>
			<p>{isFileLoader && 'Loading...'}</p>
		</>
	);
};

export default FileProgress;
