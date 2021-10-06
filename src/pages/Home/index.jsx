import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { Container, Logo, Search, Wrapper, Map } from './styles';
import logo from '../../assets/logo.svg';

const Home = () => {
	const [inputValue, setInputValue] = useState('');

	return (
		<Wrapper>
			<Container>
				<Search>
					<Logo src={logo} alt="Restaurant Finder" style={{ alignSelf: 'center' }} />
					<TextField
						label="Pesquisar restaurantes"
						variant="outlined"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Search>
			</Container>
			<Map />
		</Wrapper>
	);
};

export default Home;
