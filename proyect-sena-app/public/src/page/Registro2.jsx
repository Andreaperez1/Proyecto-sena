// React
import React from 'react'

import { Link } from 'react-router-dom'

// Componentes
import {
	FormControl,
	InputLabel,
	InputAdornment,
	Button,
	IconButton,
	// Input,
	FilledInput,
	Select,
	MenuItem,
	Autocomplete,
	TextField,
} from '@mui/material/'
import { VisibilityOff, Visibility } from '@mui/icons-material'
const Registro2 = () => {
	const [showPassword, setShowPassword] = React.useState(false)

	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}
	const [Rol, setRol] = React.useState('')
	const handleChange = (event) => {
		setRol(event.target.value)
	}

	return (
		<>
			<FormControl variant="filled">
				<InputLabel>Rol</InputLabel>
				<Select
					className="input-text"
					size="small"
					variant="filled"
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={Rol}
					onChange={handleChange}
					required
				>
					<MenuItem value={'Apren'}>Aprendiz</MenuItem>
					<MenuItem value={'Inst'}>Instructor</MenuItem>
					<MenuItem value={'Adimn'}>Administrador</MenuItem>
				</Select>
			</FormControl>

			<FormControl variant="filled">
				<InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel>
				<FilledInput
					id="filled-adornment-password"
					type={showPassword ? 'text' : 'password'}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
			<FormControl variant="filled">
				<InputLabel htmlFor="filled-adornment-password">
					Confirmar contraseña
				</InputLabel>
				<FilledInput
					id="filled-adornment-confirm-password"
					type={showPassword ? 'text' : 'password'}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
			<Autocomplete
				disablePortal
				className="campo-ficha"
				id="combo-box-demo"
				options={fichas}
				sx={{ width: 300 }}
				renderInput={(params) => <TextField {...params} label="Movie" />}
				variant="standard"
			/>
			<div className="navegacion ">
				<Link to="/registro/">
					<Button>
						<div className="button-navegacion">{'<<Atrás'}</div>
					</Button>
				</Link>
				<Link to="/registro/3">
					<Button>
						<div className="button-navegacion">{'Siguiente>>'}</div>
					</Button>
				</Link>
			</div>
		</>
	)
}

const fichas = [
	{ label: 'The Shawshank Redemption', year: 1994 },
	{ label: 'The Godfather', year: 1972 },
	{ label: 'The Godfather: Part II', year: 1974 },
	{ label: 'The Dark Knight', year: 2008 },
	{ label: '12 Angry Men', year: 1957 },
	{ label: "Schindler's List", year: 1993 },
	{ label: 'Pulp Fiction', year: 1994 },
]
export default Registro2
