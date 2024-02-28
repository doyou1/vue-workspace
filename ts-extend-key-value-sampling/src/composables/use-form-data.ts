import { ref } from "vue";

export type FormData = {
    name: string;
    age: number;
    gender: "man" | "woman"
};

export type FormDataKeys = keyof FormData;


export const useFormData = () => {

    const formData = ref<FormData>({
        name: "",
        age: 0,
        gender: "man"
    });


    function updateFormData<K extends FormDataKeys>(
        key: K,
        value: FormData[K]
    ) {
        formData.value[key] = value;
    }


    return {
        formData,
        updateFormData
    };
}