import {FormGroup, Label, Input, Col, FormText, Form} from "reactstrap";
import {useForm} from "react-hook-form";
import { yupResolver} from "@hookform/resolvers/yup";
import {number, object, string} from "yup";

function HiringForm() {

    // yup schema
    const schema = object({
        fname: string()
            .required("First name required")
            .min(1, "Min of 1 character")
            .max(20, "Max of 20 characters"),

        lname: string()
            .required()
            .min(1, "Min of 1 character")
            .max(20, "Max of 20 characters"),

        address1: string()
            .required("Address 1 required")
            .max(50, "Max 50 characters"),

        city: string()
            .required("City required")
            .max(29, "Max 29 characters"),

        state: string()
            .required()
            .oneOf(["TX", "OK", "GA"], "Must be pre-defined option"),

        age: number()
            .required("Age is required")
            .min(25, "Age minimum is 25")
            .max(89, "Age maximum is 89"),

        phone: string()
            .required("Phone is required")
            .matches(/^\d{3}-\d{3}-\d{4}$/, "Phone number must be in format XXX-XXX-XXXX"),

        email: string()
            .required("Email is required")
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Email must be format: example@gmail.com"),

        password: string()
            .required("Password is required")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,
                "Password must be 8-12 characters, include uppercase, lowercase, number, and special character")
    })

    // react hook form part that uses yup schema
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: {errors}}
        = useForm(
        {resolver: yupResolver(schema),
            mode: "onBlur",
            defaultValues:{
                fname: "",
                lname: "",
                address1: "",
                city: "",
                state: "",
                age: 25,
                phone: "",
                email: "",
                password: "",
                marriedRadio: "single"
            }}
    );

    const onSubmit = (data) =>{
        console.log(JSON.stringify(data));
        reset();
    };

    const handleChange = (event) => {
        setValue(event.target.name, event.target.value);
    }

    return(
        <>
            <Form onSubmit={handleSubmit(onSubmit)} className="border border-grey rounded m-4 p-4 bg-dark text-light">
                <h1 className="text-center">Now Hiring!</h1>

                {/*First name field*/}
                <FormGroup>
                    <Label htmlFor="fname">First Name</Label>
                    <Input
                        id="fname"
                        type="text"
                        name="fname"
                        {...register("fname")}
                        onChange={handleChange}
                    />
                    {errors.fname && <FormText color="danger">{errors.fname.message}</FormText>}
                </FormGroup>

                {/*Last name field*/}
                <FormGroup>
                    <Label htmlFor="lname">Last Name</Label>
                    <Input
                        id="lname"
                        type="text"
                        name="lname"
                        {...register("lname")}
                        onChange={handleChange}
                    />
                    {errors.lname && <FormText color="danger">{errors.lname.message}</FormText>}
                </FormGroup>

                {/*Address 1 field*/}
                <FormGroup>
                    <Label htmlFor="address1">Address 1</Label>
                    <Input
                        id="address1"
                        type="text"
                        name="address1"
                        {...register("address1")}
                        onChange={handleChange}
                    />
                    {errors.address1 && <FormText color="danger">{errors.address1.message}</FormText>}
                </FormGroup>

                {/*City field*/}
                <FormGroup>
                    <Label htmlFor="city">City</Label>
                    <Input
                        id="city"
                        type="text"
                        name="city"
                        {...register("city")}
                        onChange={handleChange}
                    />
                    {errors.city && <FormText color="danger">{errors.city.message}</FormText>}
                </FormGroup>

                {/*State field*/}
                <FormGroup>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" name="state" type={"select"} {...register("state")} onChange={handleChange} >
                        <option  value="">---Select a State---</option>
                        <option value="TX">TX</option>
                        <option value="OK">OK</option>
                        <option value="GA">GA</option>
                    </Input>
                    {errors.state && <FormText color="danger">{errors.state.message}</FormText>}
                </FormGroup>

                {/*Age field*/}
                <FormGroup>
                    <Label htmlFor="age">Age</Label>
                    <Input
                        id="age"
                        type="number"
                        name="age"
                        defaultValue={25}
                        {...register("age")}
                        onChange={handleChange}
                    />
                    {errors.age && <FormText color="danger">{errors.age.message}</FormText>}
                </FormGroup>

                {/*Phone field*/}
                <FormGroup>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                        id="phone"
                        type="text"
                        name="phone"
                        {...register("phone")}
                        onChange={handleChange}
                    />
                    {errors.phone && <FormText color="danger">{errors.phone.message}</FormText>}
                </FormGroup>

                {/*Email field*/}
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="text"
                        name="email"
                        {...register("email")}
                        onChange={handleChange}
                    />
                    {errors.email && <FormText color="danger">{errors.email.message}</FormText>}
                </FormGroup>

                {/*Password field*/}
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        {...register("password")}
                        onChange={handleChange}
                    />
                    {errors.password && <FormText color="danger">{errors.password.message}</FormText>}
                </FormGroup>

                {/* Married radio buttons */}
                <fieldset>
                    <legend>Marital Status</legend>

                    <FormGroup>
                        <input
                            type="radio"
                            id="married"
                            value="married"
                            {...register("marriedRadio")}
                            onChange={handleChange}
                        />
                        <label htmlFor="married">Married</label>
                    </FormGroup>

                    <FormGroup>
                        <input
                            type="radio"
                            id="single"
                            value="single"
                            defaultChecked
                            {...register("marriedRadio")}
                            onChange={handleChange}
                        />
                        <label htmlFor="single">Single</label>
                    </FormGroup>

                    <FormGroup>
                        <input
                            type="radio"
                            id="complicated"
                            value="it's complicated"
                            {...register("marriedRadio")}
                            onChange={handleChange}
                        />
                        <label htmlFor="complicated">It's Complicated</label>
                    </FormGroup>
                </fieldset>

                {/*Submit and reset buttons*/}
                <Col sm={10} className="mt-2">
                    <button color="secondary" type="submit" className="me-2">
                        Submit
                    </button>
                    <button color="secondary" type="reset">
                        Reset
                    </button>
                </Col>
            </Form>
        </>
    )
}

export default HiringForm;