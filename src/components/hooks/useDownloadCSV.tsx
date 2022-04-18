import { useMemo } from "react";
import CsvDownloader from "react-csv-downloader";
import utils from "../../libs/utils/utils";

type columnType = {
  id: string;
  displayName: string;
};
export function useDownloadButtonCSV(
  fileName: string,
  table: Array<Array<string>>,
  columns: columnType[],
  title: string,
  buttonElement: JSX.Element
) {
  const DownLoadButton = useMemo(
    () => (
      <CsvDownloader
        filename={`${fileName}`}
        extension=".csv"
        separator={utils.getListSeparator_bis()}
        // wrapColumnChar="'"
        columns={columns}
        datas={table}
        text={title}
      >
        {buttonElement}
      </CsvDownloader>
    ),
    [fileName, table, columns, title, buttonElement]
  );

  return DownLoadButton;
}
