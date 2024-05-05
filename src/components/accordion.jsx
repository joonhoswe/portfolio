import React, { createContext, useContext, useRef, useEffect, useState } from "react";

const AccordionContext = createContext();

const Accordion = ({ children, value,  onSetActiveButton, ...props }) => {
    const [selected, setSelected] = useState(value);

    useEffect(() => {
        onSetActiveButton(selected);  // This line will call setActiveButton in the About component
    }, [selected, onSetActiveButton]);

    return (
        <ul {...props}>
            <AccordionContext.Provider value={{ selected, setSelected }}>
                {children}
            </AccordionContext.Provider>
        </ul>
    );
};

const AccordionItem = ({ children, value, trigger, ...props }) => {
    const { selected, setSelected } = useContext(AccordionContext);
    const open = selected === value;
    const ref = useRef(null);

    const handleAccordionToggle = () => {
        // Only set a new value if another item is being opened
        if (!open) {
            setSelected(value);
        }
    };

    return (
        <li {...props}>
            <header
                role="button"
                onClick={handleAccordionToggle}
                className="flex justify-between items-center p-4 font-medium"
            >
                {trigger}
                <span className="text-lg transition-transform">
                    {open ? '-' : '+'}
                </span>
            </header>
            <div
                className="overflow-y-hidden transition-all"
                style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
            >
                <div className="pt-2 p-4" ref={ref}>
                    {children}
                </div>
            </div>
        </li>
    );
};

export { Accordion, AccordionItem };


