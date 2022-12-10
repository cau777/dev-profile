import {Accessor, createSignal, Setter} from "solid-js";

type ObserverReturn = {
    ref: (element: HTMLElement) => void;
    visible: Accessor<boolean>;
}

type Target = {
    setter: Setter<boolean>;
    triggerMultiple?: boolean;
}

let observers = new Map<number, IntersectionObserver>();
let targets = new WeakMap<Element, Target>();

export function useObserver(threshold: number, triggerMultiple?: boolean): ObserverReturn {
    let [visible, setVisible] = createSignal(false);
    
    return {
        ref: element => {
            targets.set(element, {setter: setVisible, triggerMultiple});
            
            if (observers.has(threshold)) {
                observers.get(threshold)!.observe(element);
            } else {
                let observer = new IntersectionObserver(entries => {
                    for (let entry of entries) {
                        let target = targets.get(entry.target);
                        if (target === undefined) continue;
                        
                        let val = entry.isIntersecting
                        target.setter(val);
                        if (val && !target.triggerMultiple)
                            observer.unobserve(entry.target);
                    }
                });
                observer.observe(element);
                observers.set(threshold, observer);
            }
        },
        visible
    };
}