import React from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';

interface Props {
    theme: string;
    toggleTheme: Function;
}

const Toggle = (props: Props) => {
    const { theme, toggleTheme } = props;
    return <button onClick={() => toggleTheme()}>Switch Theme</button>;
    // return (
    //     <>
    //         <form>
    //             <input type="checkbox" name="light" value="light" /> I have a bike
    //             <input type="checkbox" name="dark" value="dark" /> I have a car
    //         </form>
    //         <p>Current theme: {theme}</p>
    //     </>
    // );
};

export default Toggle;
