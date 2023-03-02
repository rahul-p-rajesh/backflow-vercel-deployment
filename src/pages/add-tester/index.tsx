// ** React Imports
import { ChangeEvent, forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { FormControl, FormHelperText, Switch } from '@mui/material'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

//** Other Imports
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'

// import { toast } from 'react-hot-toast'

// ** TypeSript interfaces

interface FormInputs {
  testerId: string
  userId: string
  certificateNo: string
  technicianName: string
  testerEmail: string
  companyName: string
  streetNumber: string
  streetName: string
  apartment: string
  city: string
  state: string
  postalCode: string
  poBoxNo: string
  poBoxCity: string
  poBoxState: string
  poBoxPostalCode: string
  telephoneNumber: string
  telephoneNumberExtension: string
  additionalPhoneNumber: string
  additionalPhoneNumberExtension: string
  calibrationExpirationDate: DateType
  certificateExpirationDate: DateType
  gcAcknowledgementExpirationDate: DateType
  businessLicenseExpirationDate: DateType
}

interface CustomInputProps {
  value: DateType
  label: string
  error: boolean
  onChange: (event: ChangeEvent) => void
}

const defaultValues = {
  testerId: '',
  userId: '',
  certificateNo: '',
  technicianName: '',
  testerEmail: '',
  companyName: '',
  streetNumber: '',
  streetName: '',
  apartment: '',
  city: '',
  state: '',
  postalCode: '',
  poBoxNo: '',
  poBoxCity: '',
  poBoxState: '',
  poBoxPostalCode: '',
  telephoneNumber: '',
  telephoneNumberExtension: '',
  additionalPhoneNumber: '',
  additionalPhoneNumberExtension: '',
  calibrationExpirationDate: null,
  certificateExpirationDate: null,
  gcAcknowledgementExpirationDate: null,
  businessLicenseExpirationDate: null
}

const defaultValues2 = {
  testerId: '1',
  certificateNo: 'BPAT-01825',
  userId: 'SCOT4254',
  technicianName: 'SCOT WILLIAMS',
  testerEmail: 'abc@gmail.com',
  companyName: 'abc engineering groups',
  streetNumber: 'AZ 85123',
  streetName: 'Aztec Dr',
  apartment: 'MiniPalais',
  city: 'NewYork',
  state: 'Texas',
  postalCode: '85321',
  poBoxNo: '1035',
  poBoxCity: 'NewYork',
  poBoxState: 'Texas',
  poBoxPostalCode: '3046-2148',
  telephoneNumber: '7715657619',
  telephoneNumberExtension: '7715657619',
  additionalPhoneNumber: '7715657657',
  additionalPhoneNumberExtension: '7715658524',
  calibrationExpirationDate: '2023-02-26T14:24:46.518Z',
  certificateExpirationDate: '2023-02-26T14:24:46.518Z',
  gcAcknowledgementExpirationDate: '2023-02-26T14:24:46.518Z',
  businessLicenseExpirationDate: '2023-02-26T14:24:46.518Z'
}
const CustomInput = forwardRef(({ ...props }: CustomInputProps, ref) => {
  return <TextField inputRef={ref} {...props} sx={{ width: '100%' }} />
})
const FormLayoutsSeparator = () => {
  // ** States
  const [addressToggle, setAddressToggle] = useState(false)

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>({ defaultValues })

  const onSubmit = async (data: FormInputs) => {
    console.log(data)
    axios
      .post('http://ec2-52-207-247-121.compute-1.amazonaws.com:8080/testers', {
        ...defaultValues2
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <DatePickerWrapper>
      <Card>
        <CardHeader title='Add tester' />
        <Divider sx={{ m: '0 !important' }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  1. Backflow technician details
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='testerId'
                    control={control}
                    rules={{ required: false }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        fullWidth
                        type='text'
                        label='Backflow Tester ID'
                        value={value}
                        onChange={onChange}
                        error={Boolean(errors.testerId)}
                      />
                    )}
                  />
                  {errors.testerId && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='certificateNo'
                    control={control}
                    rules={{ required: false }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        fullWidth
                        type='text'
                        label='Certificate No'
                        value={value}
                        onChange={onChange}
                        error={Boolean(errors.certificateNo)}
                      />
                    )}
                  />
                  {errors.certificateNo && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='technicianName'
                    control={control}
                    rules={{ required: false }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        fullWidth
                        type='text'
                        label='Technician Name'
                        value={value}
                        onChange={onChange}
                        error={Boolean(errors.technicianName)}
                      />
                    )}
                  />
                  {errors.technicianName && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='userId'
                    control={control}
                    rules={{ required: false }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        fullWidth
                        type='text'
                        label='User ID'
                        value={value}
                        onChange={onChange}
                        error={Boolean(errors.userId)}
                      />
                    )}
                  />
                  {errors.userId && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Controller
                    name='testerEmail'
                    control={control}
                    rules={{ required: false }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        fullWidth
                        type='email'
                        label='Email'
                        placeholder='email@example.com'
                        value={value}
                        onChange={onChange}
                        error={Boolean(errors.testerEmail)}
                      />
                    )}
                  />
                  {errors.testerEmail && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-email'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ mb: '0 !important' }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  2. Company Information
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Controller
                    name='companyName'
                    control={control}
                    rules={{ required: false }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        fullWidth
                        label='Company Name'
                        value={value}
                        onChange={onChange}
                        error={Boolean(errors.companyName)}
                      />
                    )}
                  />
                  {errors.companyName && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='telephoneNumber'
                    control={control}
                    rules={{ required: false }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        fullWidth
                        label='Telephone Number'
                        value={value}
                        onChange={onChange}
                        error={Boolean(errors.telephoneNumber)}
                      />
                    )}
                  />
                  {errors.telephoneNumber && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='additionalPhoneNumber'
                    control={control}
                    rules={{ required: false }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        fullWidth
                        label='Additional Phone Number'
                        value={value}
                        onChange={onChange}
                        error={Boolean(errors.additionalPhoneNumber)}
                      />
                    )}
                  />
                  {errors.additionalPhoneNumber && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid container item xs={12} alignItems='center' justifyContent='space-around'>
                <Grid item>Street Details</Grid>
                <Grid item>
                  <Switch
                    size='medium'
                    checked={addressToggle}
                    onChange={() => {
                      setAddressToggle(prev => !prev)
                    }}
                    value='checked'
                  />
                </Grid>
                <Grid item>PO Box Details</Grid>
              </Grid>
              <Grid container item columnSpacing={5}>
                {/* Street Nubmer and PO Box */}
                <Grid container item xs={12} sm={6} spacing={5}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='streetNumber'
                        control={control}
                        rules={{ required: !addressToggle }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            fullWidth
                            label='Street Number'
                            disabled={addressToggle}
                            value={value}
                            onChange={onChange}
                            error={Boolean(errors.streetNumber)}
                          />
                        )}
                      />
                      {errors.streetNumber && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='streetName'
                        control={control}
                        rules={{ required: !addressToggle }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            fullWidth
                            label='Street Name'
                            disabled={addressToggle}
                            value={value}
                            onChange={onChange}
                            error={Boolean(errors.streetName)}
                          />
                        )}
                      />
                      {errors.streetName && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='apartment'
                        control={control}
                        rules={{ required: !addressToggle }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            fullWidth
                            label='Appartment/Suite'
                            disabled={addressToggle}
                            value={value}
                            onChange={onChange}
                            error={Boolean(errors.apartment)}
                          />
                        )}
                      />
                      {errors.apartment && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='city'
                        control={control}
                        rules={{ required: !addressToggle }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            fullWidth
                            label='City'
                            disabled={addressToggle}
                            value={value}
                            onChange={onChange}
                            error={Boolean(errors.city)}
                          />
                        )}
                      />
                      {errors.city && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='state'
                        control={control}
                        rules={{ required: !addressToggle }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            fullWidth
                            label='State'
                            disabled={addressToggle}
                            value={value}
                            onChange={onChange}
                            error={Boolean(errors.state)}
                          />
                        )}
                      />
                      {errors.state && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='postalCode'
                        control={control}
                        rules={{ required: !addressToggle }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            fullWidth
                            label='Postal Code'
                            disabled={addressToggle}
                            value={value}
                            onChange={onChange}
                            error={Boolean(errors.postalCode)}
                          />
                        )}
                      />
                      {errors.postalCode && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>

                {/* PO Box */}
                <Grid container item xs={12} sm={6} spacing={5} alignContent='start'>
                  <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='poBoxNo'
                        control={control}
                        rules={{ required: addressToggle }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            fullWidth
                            label='PO Box Number'
                            disabled={!addressToggle}
                            value={value}
                            onChange={onChange}
                            error={Boolean(errors.poBoxNo)}
                          />
                        )}
                      />
                      {errors.poBoxNo && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='poBoxCity'
                        control={control}
                        rules={{ required: addressToggle }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            fullWidth
                            label='PO Box City'
                            disabled={!addressToggle}
                            value={value}
                            onChange={onChange}
                            error={Boolean(errors.poBoxCity)}
                          />
                        )}
                      />
                      {errors.poBoxCity && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='poBoxState'
                        control={control}
                        rules={{ required: addressToggle }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            fullWidth
                            label='PO Box State'
                            disabled={!addressToggle}
                            error={Boolean(errors.poBoxState)}
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.poBoxState && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='poBoxPostalCode'
                        control={control}
                        rules={{ required: addressToggle }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            fullWidth
                            label='PO Box Postal Code'
                            error={Boolean(errors.poBoxPostalCode)}
                            disabled={!addressToggle}
                            aria-describedby='validation-basic-last-name'
                            value={value}
                            onChange={onChange}
                          />
                        )}
                      />
                      {errors.poBoxPostalCode && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              {/* CERTIFICATE DETAILS */}
              <Grid item xs={12}>
                <Divider sx={{ mb: '0 !important' }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  3. Certificate Details
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='calibrationExpirationDate'
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      selected={value}
                      showYearDropdown
                      showMonthDropdown
                      placeholderText='MM-DD-YYYY'
                      customInput={
                        <CustomInput
                          value={value}
                          onChange={onChange}
                          label='Calibration Expiration Date'
                          error={Boolean(errors.certificateExpirationDate)}
                          aria-describedby='validation-basic-dob'
                        />
                      }
                      onChange={e => onChange(e)}
                    />
                  )}
                />
                {errors.calibrationExpirationDate && (
                  <FormHelperText sx={{ mx: 3.5, color: 'error.main' }} id='validation-basic-dob'>
                    This field is required
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='certificateExpirationDate'
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      selected={value}
                      showYearDropdown
                      showMonthDropdown
                      placeholderText='MM-DD-YYYY'
                      customInput={
                        <CustomInput
                          value={value}
                          onChange={onChange}
                          label='Certificate Expiration Date'
                          error={Boolean(errors.certificateExpirationDate)}
                          aria-describedby='validation-basic-dob'
                        />
                      }
                      onChange={e => onChange(e)}
                    />
                  )}
                />
                {errors.certificateExpirationDate && (
                  <FormHelperText sx={{ mx: 3.5, color: 'error.main' }} id='validation-basic-dob'>
                    This field is required
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='gcAcknowledgementExpirationDate'
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      selected={value}
                      showYearDropdown
                      showMonthDropdown
                      placeholderText='MM-DD-YYYY'
                      customInput={
                        <CustomInput
                          value={value}
                          onChange={onChange}
                          label='GC Acknowledgement Expiration Date'
                          error={Boolean(errors.gcAcknowledgementExpirationDate)}
                          aria-describedby='validation-basic-dob'
                        />
                      }
                      onChange={e => onChange(e)}
                    />
                  )}
                />
                {errors.gcAcknowledgementExpirationDate && (
                  <FormHelperText sx={{ mx: 3.5, color: 'error.main' }} id='validation-basic-dob'>
                    This field is required
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='businessLicenseExpirationDate'
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      selected={value}
                      showYearDropdown
                      showMonthDropdown
                      placeholderText='MM-DD-YYYY'
                      customInput={
                        <CustomInput
                          value={value}
                          onChange={onChange}
                          label='Business License Expiration Date'
                          error={Boolean(errors.businessLicenseExpirationDate)}
                          aria-describedby='validation-basic-dob'
                        />
                      }
                      onChange={e => onChange(e)}
                    />
                  )}
                />
                {errors.businessLicenseExpirationDate && (
                  <FormHelperText sx={{ mx: 3.5, color: 'error.main' }} id='validation-basic-dob'>
                    This field is required
                  </FormHelperText>
                )}
              </Grid>
            </Grid>
          </CardContent>
          <Divider sx={{ m: '0 !important' }} />
          <CardActions>
            <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
              Submit
            </Button>
            <Button type='reset' size='large' color='secondary' variant='outlined'>
              Reset
            </Button>
          </CardActions>
        </form>
      </Card>
    </DatePickerWrapper>
  )
}

export default FormLayoutsSeparator
