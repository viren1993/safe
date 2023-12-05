import * as Yup from 'yup';

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  Yup.object().shape({
    money: Yup.string().required("This field is required"),
    address: Yup.string()
      .min(45, "Too Short!")
      .max(45, "Too Long!")
      .required("This field is required"),
    investmentamount: Yup.number()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("This field is required"),
    investmentdate: Yup.date().required("This field is required"),
    valuation: Yup.bool().oneOf([true], "This field is required"),
    valuationcapnumber: Yup.number().integer().required("This field is required"),
    discount: Yup.bool().oneOf([true], "This field is required"),
    discountnumber: Yup.number().min(1, "Too Short!").max(100, "Too Long!").required("This field is required"),
    prorate: Yup.bool().oneOf([true], "This field is required"),
    favoured: Yup.bool().oneOf([true], "This field is required"),
  }),
  Yup.object().shape({
    companylegalname: Yup.string().required("This field is required"),
    companyaddress: Yup.string().required("This field is required"),
    companyaddress: Yup.string().required("This field is required"),
    country: Yup.string().required("This field is required"),
    state: Yup.string().required("This field is required"),
    benificial: Yup.string().required("This field is required"),
    benificialowner: Yup.string().required("This field is required"),
  }),
  Yup.object().shape({
    investortype: Yup.string().required(),
    investorlegal: Yup.string().required(),
    authorized: Yup.string().required(),
    signatory: Yup.string(),
    addressoptional: Yup.string(),
    bylines: Yup.string(),
  }),
  // Yup.object().shape({
  //   [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
  //   [cardNumber.name]: Yup.string()
  //     .required(`${cardNumber.requiredErrorMsg}`)
  //     .matches(visaRegEx, cardNumber.invalidErrorMsg),
  //   [expiryDate.name]: Yup.string()
  //     .nullable()
  //     .required(`${expiryDate.requiredErrorMsg}`)
  //     .test('expDate', expiryDate.invalidErrorMsg, val => {
  //       if (val) {
  //         const startDate = new Date();
  //         const endDate = new Date(2050, 12, 31);
  //         if (moment(val, moment.ISO_8601).isValid()) {
  //           return moment(val).isBetween(startDate, endDate);
  //         }
  //         return false;
  //       }
  //       return false;
  //     }),
  //   [cvv.name]: Yup.string()
  //     .required(`${cvv.requiredErrorMsg}`)
  //     .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
  // })
];
