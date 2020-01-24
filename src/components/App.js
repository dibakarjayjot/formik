import React from 'react';
import DatePicker from 'react-datepicker';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

const App = ({
    touched,
    errors,
    values,
    setFieldValue
}) => (
    <Form className="login-form">
            <h2 style={{textAlign:'center'}}>Login</h2>
        <div>
           <label>
            Email
        <Field type="email" name="email" placeholder="Email" className="first"
        autoComplete="off" 
        /></label>
        { touched.email && errors.email && <p>{errors.email}</p> }
        </div>
        <div>
        <label>Password 
        <Field type="password" name="password" placeholder="Password" autoComplete="off" className="first"
        /></label>
        { touched.password && errors.password && <p>{errors.password}</p> }
        </div>
        <div><div >Start Date</div> 
            <div style={{width:'100%'}}>
            <DatePicker name="startDate" selected={values.startDate} 
            onChange={date => setFieldValue('startDate', date)} 
            minDate={new Date()}  required autoComplete="off" className="first second" width="100%" />
            </div></div>
        
        <div><div> End Date </div>
        
            <DatePicker name="endDate" selected={values.endDate} 
            onChange={date => setFieldValue('endDate', date)} 
            minDate={values.startDate} required autoComplete="off"  className="first second" />
            </div>
        <div style={{textAlign:'center '}}>
        <button type="submit" style={{textAlign:'center'}}>Submit</button></div>
        
    </Form>
)

const FormikApp = withFormik({
    mapPropsToValues({email, password, startDate, endDate}){
        return {
            email:email || '',
            password:password || '',
            startDate:startDate,
            endDate: endDate
        }
    },
    validationSchema: Yup.object().shape({
        email:Yup.string().email().required(),
        password:Yup.string().min(6).required()
    }),
    handleSubmit(values){
        console.log(values);
    }
})(App)
export default FormikApp;