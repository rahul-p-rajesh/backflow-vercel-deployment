// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports
import { useDispatch } from 'react-redux'

// ** Actions Imports
import { addUser } from 'src/store/apps/customers'

// ** Types Imports
import { AppDispatch } from 'src/store'
//import { DataGrid } from '@mui/x-data-grid'

//import Checkbox from 'src/@core/theme/overrides/checkbox'

interface SidebarAddUserType {
  open: boolean
  toggle: () => void
}

interface UserData {
  email: string
  websiteUrl: string

  // billing: string
  companyName: string
  slStreetNo: string
  slStreetName: string
  slApartment: string
  slCity: string
  slState: string
  slPostalCode: number
  maStreetNo: string
  maStreetName: string
  maApartment: string
  maCity: string
  maState: string
  maPostalCode: number
  poBoxNo: string
  poBoxCity: string
  poBoxState: string
  poBoxPostalCode: number
  phoneNo: number
  firstName: string
  lastName: string
}

const showErrors = (field: string, valueLen: number, min: number) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  companyName: yup.string().required(),
  slStreetNo: yup.string().required(),
  slStreetName: yup.string().required(),
  slApartment: yup.string().required(),
  slCity: yup.string().required(),
  slState: yup.string().required(),
  slPostalCode: yup.number().required(),
  maStreetNo: yup.string().required(),
  maStreetName: yup.string().required(),
  maApartment: yup.string().required(),
  maCity: yup.string().required(),
  maState: yup.string().required(),
  maPostalCode: yup.number().required(),
  poBoxNo: yup.string().required(),
  poBoxCity: yup.string().required(),
  poBoxState: yup.string().required(),
  poBoxPostalCode: yup.number().required(),

  // billing: yup.string().required(),
  email: yup.string().email().required(),
  websiteUrl: yup.string().url().required(),
  phoneNo: yup
    .number()
    .typeError('Contact Number field is required')
    .min(10, obj => showErrors('Contact Number', obj.value.length, obj.min))
    .min(10, obj => showErrors('Contact Number', obj.value.length, obj.max))
    .required(),
  firstName: yup
    .string()
    .min(3, obj => showErrors('First Name', obj.value.length, obj.min))
    .required(),
  lastName: yup
    .string()
    .min(3, obj => showErrors('lastName', obj.value.length, obj.min))
    .required()
})

const defaultValues = {
  email: '',
  websiteUrl: '',
  companyName: '',
  slStreetNo: '',
  slStreetName: '',
  slApartment: '',
  slCity: '',
  slState: '',
  slPostalCode: Number(''),
  maStreetNo: '',
  maStreetName: '',
  maApartment: '',
  maCity: '',
  maState: '',
  maPostalCode: Number(''),
  poBoxNo: '',
  poBoxCity: '',
  poBoxState: '',
  poBoxPostalCode: Number(''),

  //billing: '',
  firstName: '',
  lastName: '',
  phoneNo: Number('')
}

const SidebarAddUser = (props: SidebarAddUserType) => {
  // ** Props
  const { open, toggle } = props

  // ** State
  // const [plan, setPlan] = useState<string>('basic')
  //const [role, setRole] = useState<string>('subscriber')
  
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const {
    reset,
    control,
    setValue,
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: UserData) => {
    // console.log(data)
    dispatch(addUser({ ...data })) //,role, currentPlan: plan
    toggle()
    reset()
  }

  const handleClose = () => {
    // setPlan('basic')
    //setRole('subscriber')
    setValue('phoneNo', Number(''))
    toggle()
    reset()
  }

  
  return (
    <Grid>
      <Dialog fullWidth maxWidth='md' scroll='body' onClose={handleClose} open={open}>
        {/*} <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
  */}

        <Header>
          <Typography variant='h6'> Add User </Typography>
          <IconButton size='small' onClick={handleClose} sx={{ color: 'text.primary' }}>
            <Icon icon='bx:x' fontSize={20} />
          </IconButton>
        </Header>
        <Box sx={{ p: 5 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <>
              <FormControl fullWidth sx={{ mb: 6 }}>
                <Controller
                  name='firstName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='First Name'
                      onChange={onChange}
                      placeholder='John Doe'
                      error={Boolean(errors.firstName)}
                    />
                  )}
                />

                {errors.firstName && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.firstName.message}</FormHelperText>
                )}
              </FormControl>
            </>
            <FormControl fullWidth sx={{ mb: 6 }}>
              <Controller
                name='lastName'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    label='Last Name'
                    onChange={onChange}
                    placeholder='johndoe'
                    error={Boolean(errors.lastName)}
                  />
                )}
              />
              {errors.lastName && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.lastName.message}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
              <Controller
                name='companyName'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    label='Company Name'
                    onChange={onChange}
                    placeholder='Company PVT LTD'
                    error={Boolean(errors.companyName)}
                  />
                )}
              />
              {errors.companyName && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.companyName.message}</FormHelperText>
              )}
            </FormControl>

            <Typography variant='subtitle1' sx={{ fontWeight: 800 }}>
              Service Location
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={10} sm={5}>
                {/* <FormControl fullWidth sx={{ mb: 6 }}> */}

                <Controller
                  name='slStreetNo'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Steet No.'
                      onChange={onChange}
                      placeholder='425'
                      error={Boolean(errors.slStreetNo)}
                    />
                  )}
                />
                {errors.slStreetNo && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.slStreetNo.message}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='slStreetName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Street Name'
                      onChange={onChange}
                      placeholder='xyz Avenue'
                      error={Boolean(errors.slStreetName)}
                    />
                  )}
                />
                {errors.slStreetName && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.slStreetName.message}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='slApartment'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Apartment Name'
                      onChange={onChange}
                      placeholder='Greenway Apartment'
                      error={Boolean(errors.slApartment)}
                    />
                  )}
                />
                {errors.slApartment && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.slApartment.message}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='slCity'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='City'
                      onChange={onChange}
                      placeholder='Newyork'
                      error={Boolean(errors.slCity)}
                    />
                  )}
                />
                {errors.slCity && <FormHelperText sx={{ color: 'error.main' }}>{errors.slCity.message}</FormHelperText>}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='slState'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='State'
                      onChange={onChange}
                      placeholder='Texas'
                      error={Boolean(errors.slCity)}
                    />
                  )}
                />
                {errors.slState && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.slState.message}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='slPostalCode'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type='number'
                      value={value}
                      label='Postal Code'
                      onChange={onChange}
                      placeholder='625013'
                      error={Boolean(errors.slPostalCode)}
                    />
                  )}
                />
                {errors.slPostalCode && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.slPostalCode.message}</FormHelperText>
                )}
              </Grid>

              {/* </FormControl> */}
            </Grid>
            <br />
            <Typography variant='subtitle1' sx={{ fontWeight: 800 }}>
              Mailing Address
            </Typography>

            <Box>
              <Box>
                <FormControlLabel label='Mailing Address same as Service Location Address' control={<Checkbox />} />
              </Box>
            </Box>

            {/*  <DataGrid /> */}

            <Grid container spacing={4}>
              <Grid item xs={10} sm={5}>
                {/* <FormControl fullWidth sx={{ mb: 6 }}> */}

                <Controller
                  name='maStreetNo'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Steet No.'
                      onChange={onChange}
                      placeholder='425'
                      error={Boolean(errors.maStreetNo)}
                    />
                  )}
                />
                {errors.maStreetNo && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.maStreetNo.message}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='maStreetName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Street Name'
                      onChange={onChange}
                      placeholder='xyz Avenue'
                      error={Boolean(errors.maStreetName)}
                    />
                  )}
                />
                {errors.maStreetName && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.maStreetName.message}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='maApartment'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Apartment Name'
                      onChange={onChange}
                      placeholder='Greenway Apartment'
                      error={Boolean(errors.maApartment)}
                    />
                  )}
                />
                {errors.maApartment && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.maApartment.message}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='maCity'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='City'
                      onChange={onChange}
                      placeholder='Newyork'
                      error={Boolean(errors.maCity)}
                    />
                  )}
                />
                {errors.maCity && <FormHelperText sx={{ color: 'error.main' }}>{errors.maCity.message}</FormHelperText>}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='maState'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='State'
                      onChange={onChange}
                      placeholder='Texas'
                      error={Boolean(errors.maState)}
                    />
                  )}
                />
                {errors.maState && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.maState.message}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='maPostalCode'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type='number'
                      value={value}
                      label='Postal Code'
                      onChange={onChange}
                      placeholder='625013'
                      error={Boolean(errors.maPostalCode)}
                    />
                  )}
                />
                {errors.maPostalCode && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.maPostalCode.message}</FormHelperText>
                )}
              </Grid>

              {/* </FormControl> */}
            </Grid>
            <br />

            <Typography variant='subtitle1' sx={{ fontWeight: 800 }}>
              Postal Details
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={10} sm={5}>
                <Controller
                  name='poBoxNo'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Post Box No.'
                      onChange={onChange}
                      placeholder='42512'
                      error={Boolean(errors.poBoxNo)}
                    />
                  )}
                />
                {errors.poBoxNo && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.poBoxNo.message}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='poBoxCity'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='City'
                      onChange={onChange}
                      placeholder='Newyork'
                      error={Boolean(errors.poBoxCity)}
                    />
                  )}
                />
                {errors.poBoxCity && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.poBoxCity.message}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='poBoxState'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='State'
                      onChange={onChange}
                      placeholder='Texas'
                      error={Boolean(errors.poBoxState)}
                    />
                  )}
                />
                {errors.poBoxState && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.poBoxState.message}</FormHelperText>
                )}
              </Grid>

              <Grid item xs={12} sm={5}>
                <Controller
                  name='poBoxPostalCode'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type='number'
                      value={value}
                      label='Postal Code'
                      onChange={onChange}
                      placeholder='625010'
                      error={Boolean(errors.poBoxPostalCode)}
                    />
                  )}
                />
                {errors.poBoxPostalCode && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.poBoxPostalCode.message}</FormHelperText>
                )}
              </Grid>
            </Grid>
            <br />

            <FormControl fullWidth sx={{ mb: 6 }}>
              <Controller
                name='phoneNo'
                control={control}
                
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    type='number'
                    value={value}
                    label='Phone Number'
                    onChange={onChange}
                    placeholder='3972945153'
                    

                    error={Boolean(errors.phoneNo)}
                  />
                )}
              />
              {errors.phoneNo && <FormHelperText sx={{ color: 'error.main' }}>{errors.phoneNo.message}</FormHelperText>}
            </FormControl>

            <FormControl fullWidth sx={{ mb: 6 }}>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    type='email'
                    value={value}
                    label='Email'
                    onChange={onChange}
                    placeholder='johndoe@email.com'
                    error={Boolean(errors.email)}
                  />
                )}
              />
              {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
            </FormControl>

            <FormControl fullWidth sx={{ mb: 6 }}>
              <Controller
                name='websiteUrl'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    type='url'
                    value={value}
                    label='Web URL'
                    onChange={onChange}
                    placeholder='https://www.website.com'
                    error={Boolean(errors.websiteUrl)}
                  />
                )}
              />
              {errors.websiteUrl && <FormHelperText sx={{ color: 'error.main' }}>{errors.websiteUrl.message}</FormHelperText>}
            </FormControl>

            {/*   <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel
              id='validation-billing-select'
              error={Boolean(errors.billing)}
              htmlFor='validation-billing-select'
            >
              Billing
            </InputLabel>
            <Controller
              name='billing'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <Select
                  value={value}
                  label='Billing'
                  onChange={onChange}
                  error={Boolean(errors.billing)}
                  labelId='validation-billing-select'
                  aria-describedby='validation-billing-select'
                >
                  <MenuItem value=''>Billing</MenuItem>
                  <MenuItem value='Auto Debit'>Auto Debit</MenuItem>
                  <MenuItem value='Manual - Cash'>Manual - Cash</MenuItem>
                  <MenuItem value='Manual - Paypal'>Manual - Paypal</MenuItem>
                  <MenuItem value='Manual - Credit Card'>Manual - Credit Card</MenuItem>
                </Select>
              )}
            />
            {errors.billing && (
              <FormHelperText sx={{ color: 'error.main' }} id='validation-billing-select'>
                This field is required
              </FormHelperText>
            )}
          </FormControl>

            
          <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel id='role-select'>Select Role</InputLabel>
            <Select
              fullWidth
              value={role}
              id='select-role'
              label='Select Role'
              labelId='role-select'
              onChange={e => setRole(e.target.value)}
              inputProps={{ placeholder: 'Select Role' }}
            >
              <MenuItem value='admin'>Admin</MenuItem>
              <MenuItem value='author'>Author</MenuItem>
              <MenuItem value='editor'>Editor</MenuItem>
              <MenuItem value='maintainer'>Maintainer</MenuItem>
              <MenuItem value='subscriber'>Subscriber</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel id='plan-select'>Select Plan</InputLabel>
            <Select
              fullWidth
              value={plan}
              id='select-plan'
              label='Select Plan'
              labelId='plan-select'
              onChange={e => setPlan(e.target.value)}
              inputProps={{ placeholder: 'Select Plan' }}
            >
              <MenuItem value='basic'>Basic</MenuItem>
              <MenuItem value='company'>Company</MenuItem>
              <MenuItem value='enterprise'>Enterprise</MenuItem>
              <MenuItem value='team'>Team</MenuItem>
            </Select>
          </FormControl>
            */}

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }} disabled={!isValid}>
                Submit
              </Button>

              <Button size='large' variant='outlined' color='secondary' onClick={handleClose}>
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Dialog>
    </Grid>

    //</Drawer>
  )
}

export default SidebarAddUser
