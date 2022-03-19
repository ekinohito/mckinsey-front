import * as XLSX from "xlsx"
import FileSaver from "file-saver"
import { SupplierDoc } from "../typings/Supplier";
import { useRef } from "react";

export default function Download({ supplier, fileName }: { supplier: SupplierDoc, fileName: string }) {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const dat = []
    const table = useRef<HTMLTableElement>(null)
    const exportToCSV = () => {
        // const ws = XLSX.utils.json_to_sheet(dat);
        if (!table.current) return
        const wb = XLSX.utils.table_to_book(table.current)
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }
    return (
        <>
            <button onClick={exportToCSV} className="text-lg bg-[#011631] text-white rounded-lg font-regular p-2 w-52">
                Загрузить отчет
            </button>
            <table ref={table} className="hidden">
                <tbody>
                    <tr><td></td><td colSpan={2}>ОТЧЁТ О ПРОВЕРКЕ {supplier.name}</td></tr>
                    <tr></tr>
                    <tr><td colSpan={2}>дата: {(new Date()).toLocaleDateString() }</td></tr>
                    <tr></tr>
                    <tr><td></td><td>ИНН/КПП</td><td>{supplier.inn}</td></tr>
                    <tr><td></td><td>ОГРН</td><td>{supplier.ogrn}</td></tr>
                    <tr><td></td><td>Адрес, указанный в ЕГРЮЛ</td><td></td></tr>
                    <tr><td></td><td>Фактический адрес</td><td></td></tr>
                    <tr><td></td><td>Адрес склада</td><td></td></tr>
                    <tr><td></td><td>Вид деятельности</td><td></td></tr>
                    <tr><td></td><td>Интернет-сайт</td><td></td></tr>
                    <tr><td></td><td>Руководитель</td><td></td></tr>
                    <tr><td></td><td>Учредители</td><td></td></tr>
                    <tr><td></td><td>Уполномоченный представитель</td><td></td></tr>
                    <tr><td></td><td>Работники, которые вправе подписывать счета-фактуры и первичные документы</td><td></td></tr>
                    <tr><td></td><td>Контактные данные</td><td>
                        {supplier.contacts?.phone && `тел. ${supplier.contacts?.phone}`}<br/>
                        {supplier.contacts?.phone && `эл. почта ${supplier.contacts?.email  }`}
                    </td></tr>
                    <tr><td></td><td>Сведения из ЕГРЮЛ</td><td>Электронная выписка получена</td></tr>
                    <tr><td></td><td>Сведения о руководителях и учредителях, которые в суде подтвердили, что не имеют отношения к компании</td><td></td></tr>
                    <tr><td></td><td>Массовые адреса</td><td></td></tr>
                    <tr><td></td><td>Массовые руководители и учредители</td><td></td></tr>
                    <tr><td></td><td>База судебных споров</td><td>{supplier.juridicalCourts}</td></tr>
                    <tr><td></td><td>Полученные документы</td><td></td></tr>
                    <tr><td></td><td>Лицензии, свидетельства о допуске к работам, членство в СРО</td><td></td></tr>
                    <tr><td></td><td>Отчет отдела маркетинга о выборе контрагента</td><td></td></tr>
                    <tr><td></td><td>Решение по контрагенту</td><td></td></tr>
                </tbody>
            </table>
        </>

    )
}