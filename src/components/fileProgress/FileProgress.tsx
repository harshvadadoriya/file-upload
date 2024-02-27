type TypeFileProgressProps = {
	isFileLoader: boolean;
};

const FileProgress = ({ isFileLoader }: TypeFileProgressProps) => {
	return (
		<>
			<h3>{isFileLoader && 'Loading...'}</>
		</>
	);
};

export default FileProgress;
