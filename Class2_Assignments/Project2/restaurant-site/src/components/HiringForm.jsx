import {Form, FormGroup, Label, Input, Col, Button, FormText} from "reactstrap";

function HiringForm() {
    return(
        <>
            <Form className="border border-grey rounded m-4 p-4 bg-dark text-light">
                <h1 className="text-center">Now Hiring!</h1>

                {/*First name field*/}
                <FormGroup>
                    <Label for="fname">First Name</Label>
                    <Input
                        id="fname"
                        name="fname"
                        type="text"
                        minLength={1}
                        maxLength={20}
                        required={true}
                    />
                    <FormText color="light">
                        First name is required, 1-20 characters
                    </FormText>
                </FormGroup>

                {/*Last name field*/}
                <FormGroup>
                    <Label for="lname">Last Name</Label>
                    <Input
                        id="lname"
                        name="lname"
                        type="text"
                        minLength={1}
                        maxLength={20}
                    />
                    <FormText color="light">
                        Last name is optional, 1-20 characters
                    </FormText>
                </FormGroup>

                {/*Address 1 field*/}
                <FormGroup>
                    <Label for="address1">Address 1</Label>
                    <Input
                        id="address1"
                        name="address1"
                        type="text"
                        minLength={1}
                        maxLength={50}
                        required={true}
                    />
                    <FormText color="light">
                        Address is required, 1-50 characters
                    </FormText>
                </FormGroup>

                {/*Address 2 field*/}
                <FormGroup>
                    <Label for="address2">Address 2</Label>
                    <Input
                        id="address2"
                        name="address2"
                        type="text"
                    />
                </FormGroup>

                {/*City field*/}
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                        id="city"
                        name="city"
                        type="text"
                        maxLength={29}
                        required={true}
                    />
                    <FormText color="light">
                        City is required, 29 characters max
                    </FormText>
                </FormGroup>

                {/*State field*/}
                <FormGroup>
                    <Label for="state">State</Label>
                    <Input id="state" name="state" type="select">
                        <option value="TX">TX</option>
                        <option value="OK">OK</option>
                        <option value="GA">GA</option>
                    </Input>
                </FormGroup>

                {/*Age field*/}
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                        id="age"
                        name="age"
                        type="number"
                        defaultValue={21}
                        min={21}
                        max={99}
                        required={true}
                    />
                    <FormText color="light">
                        Age is required, must be 21-99
                    </FormText>
                </FormGroup>

                {/*Phone# field*/}
                <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required={true}
                    />
                    <FormText color="light">
                        Phone number is required. Format: (xxx-xxx-xxxx)
                    </FormText>
                </FormGroup>

                {/*Email field*/}
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required={true}
                    />
                    <FormText color="light">
                        Email is required. Format: example@gmail.com
                    </FormText>
                </FormGroup>

                {/*Password field*/}
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required={true}
                        maxLength={12}
                        pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,12}$"}
                    />
                    <FormText color="light">
                        Password is 8-12 characters, 1 uppercase letter, 1 lowercase letter, 1 number, 1 special
                        character (!@#$%^&*)
                    </FormText>
                </FormGroup>

                {/*Married radio buttons*/}
                <FormGroup tag="fieldset">
                    <legend className="col-form-label col-sm-2">
                        Marital Status
                    </legend>
                    <FormGroup check>
                        <Input
                            name="married"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            Married
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="married"
                            type="radio"
                            defaultChecked={true}
                        />
                        {' '}
                        <Label check>
                            Single
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="married"
                            type="radio"
                        />
                        {' '}
                        <Label check>
                            It's Complicated
                        </Label>
                    </FormGroup>
                </FormGroup>

                {/*Color checkboxes*/}
                <FormGroup tag="fieldset">
                    <legend className="col-form-label col-sm-2">
                        Favorite Colors
                    </legend>
                    <FormGroup check>
                        <Input
                            name="color"
                            type="checkbox"
                        />
                        {' '}
                        <Label check>
                            Blue
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="color"
                            type="checkbox"
                        />
                        {' '}
                        <Label check>
                            Red
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="color"
                            type="checkbox"
                        />
                        {' '}
                        <Label check>
                            Green
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="color"
                            type="checkbox"
                        />
                        {' '}
                        <Label check>
                            Yellow
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="color"
                            type="checkbox"
                        />
                        {' '}
                        <Label check>
                            Purple
                        </Label>
                    </FormGroup>
                </FormGroup>

                {/*Additional info text area*/}
                <FormGroup>
                    <Label>More Info</Label>
                    <Input
                        id="moreInfo"
                        name="moreInfor"
                        type="textarea"
                        maxLength={30}
                    />
                </FormGroup>

                {/*Submit and reset buttons*/}
                <Col sm={10} className="mt-2">
                    <Button color="secondary" type="submit" className="me-2">
                        Submit
                    </Button>
                    <Button color="secondary" type="reset">
                        Reset
                    </Button>
                </Col>
            </Form>
        </>
    )
}

export default HiringForm;