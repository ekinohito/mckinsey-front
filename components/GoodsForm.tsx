import { Field, Formik, Form, FormikProps } from "formik";
import { api } from "../axios/api";
import products from '../const/products.json'
import { SuppliersResponse } from "../pages/api/suppliers";
import { OptResponse } from "../typings/Response";
import { Supplier, SupplierDoc } from "../typings/Supplier";

export default function GoodsForm({setSuppliers}:{setSuppliers: (suppliers: SupplierDoc[]) => void}) {
    return (
        <Formik initialValues={{
            goodType: '',
            useCache: true,
        }} onSubmit={async (values) => {
            const { data } = await api.get('suppliers', { params: values })
            const suppliers = JSON.parse(data) as SuppliersResponse
            if (suppliers.status !== 'ok') return
            setSuppliers(suppliers.data)
        }}
            enableReinitialize>
            {(props: FormikProps<any>) => (
                <Form className="flex flex-col space-y-4 items-center">
                    <span className="text-lg">Поиск поставщиков</span>
                    <label>
                        <span className="hidden">Название продукта:</span>
                        <Field required name="goodType" as="select" className="
                        w-full text-ellipsis p-3 mt-2 rounded-lg form-select bg-[#001731] text-[#3c566f] accent-rose-900">
                            <option value=''>Выберите товар...</option>
                            {products.map(product => <option value={product.id} key={product.id}>
                                {product.title}
                            </option>)}
                        </Field>
                    </label>
                    <label className="flex flex-row items-center ">
                        <Field type="checkbox" name="useCache" 
                        className="h-3 w-3 mr-3 accent-[#011631] hidden"/>
                        <div className={"w-3.5 h-3.5 mr-3 border-[3px] border-[#011631] text-center " + (props.values.useCache? "bg-[#011631] after:ml-[0.075em] after:-m-0.5 after:block after:rotate-45 after:border-r-2 after:border-b-2 after:w-1.5 after:h-2.5" : "bg-[#4c738f]")}/>
                        <span className="text-lg font-bold">Иcпользовать значение из кеша</span>
                    </label>
                    <button type="submit" className="text-lg bg-[#011631] text-white rounded-lg font-regular p-2 w-52">Отправить</button>
                </Form>
            )}
        </Formik>
    )
}