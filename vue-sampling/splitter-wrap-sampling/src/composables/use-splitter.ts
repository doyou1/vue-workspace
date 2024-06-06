import { computed, ComputedRef, InjectionKey, ref, Ref, watch } from "vue";

export type SplitterInjectionValue = {
    layout: ComputedRef<"horizontal" | "vertical">;
    gutterSize: ComputedRef<number>;
    mountedPanelSize: Ref<number>;
    notifyMounted: () => void;
}

export const SplitterInjectionKey: InjectionKey<SplitterInjectionValue> = Symbol("Splitter");


export const useSplitterController = () => {

    const mountedPanelSize = ref<number>(0);
    const notifyMounted = () => {
        mountedPanelSize.value += 1;
    };

    const splitterRef = ref();

    const gutters = computed<HTMLDivElement[] | undefined>(() => splitterRef.value?.$refs.gutter)


    const dummyIndex = ref<number>(0);
    const isMouseovers = ref<boolean[]>([]);
    const stop = watch(gutters, () => {
        if (gutters.value && mountedPanelSize.value - 1 === gutters.value.length) {
            /** mouseover, mouseleave addeventlistener */
            gutters.value.forEach((gutter, index) => {
                dummyIndex.value = index;
            })
            stop();
        }
    })

    return {
        mountedPanelSize,
        notifyMounted,
        splitterRef,
    };
}