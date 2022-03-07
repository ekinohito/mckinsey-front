import { Field, Formik, Form, FormikProps } from "formik";
import { api } from "../axios/api";
import products from '../const/products.json'
import { SuppliersResponse } from "../pages/api/suppliers";
import { OptResponse } from "../typings/Response";
import { Supplier } from "../typings/Supplier";

export default function GoodsForm({setSuppliers}:{setSuppliers: (suppliers: Supplier[]) => void}) {
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
                        w-full text-ellipsis p-3 mt-2 rounded-lg font-mono form-select bg-blue-900">
                            <option value=''>Выберите продукт...</option>
                            {products.map(product => <option value={product.id} key={product.id}>
                                {product.title}
                            </option>)}
                        </Field>
                    </label>
                    <label className="flex flex-row items-center">
                        <Field type="checkbox" name="useCache" className="h-6 w-6 ml-3" />
                        <span className="text-lg font-bold">Иcпользовать значение из кеша:</span>
                    </label>
                    <button type="submit" className="text-xl bg-blue-600 text-white rounded-lg font-semibold p-2">Отправить</button>
                </Form>
            )}
        </Formik>
    )
}