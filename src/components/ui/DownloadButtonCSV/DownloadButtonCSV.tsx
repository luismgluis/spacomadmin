import React from "react";
import CsvDownloader from "react-csv-downloader";
import utils from "../../../libs/utils/utils";

type columnType = {
	id: string;
	displayName: string;
};

type DownloadButtonCSVProps = {
	fileName: string;
	table: Array<Array<string>>;
	columns: columnType[];
	title: string;
	children: JSX.Element;
};
const DownloadButtonCSV: React.FC<DownloadButtonCSVProps> = ({
	fileName,
	table,
	columns,
	title,
	children,
}) => {
	return (
		<CsvDownloader
			filename={`${fileName}`}
			extension=".csv"
			separator={utils.getListSeparator_bis()}
			columns={columns}
			datas={table}
			text={title}
		>
			{children}
		</CsvDownloader>
	);
};
export default DownloadButtonCSV;
