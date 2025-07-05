import "./RegisterPage.css";
import Header from "../components/Header";

export default function RegisterPage() {
		type InputProps = {
			label: string;
			name: string;
			type: string;
			id: string;
		}
		
		const Input = ({label, name, type, id}: InputProps) => (
			<div className="user-input">
				<div className="user-input-container">
					<label htmlFor={id}>
						{label}
					</label>
					<input type={type} name={name} id={id} placeholder={label}/>
				</div>
			</div>
		);

    return (
			<>
			<section className="register-page">
				<Header />
				<div className="register-container text-font">
					<form>
						<div className="info">
							<h2>Sign Up</h2>
							<div className="person-info">
								<div className="two-columns">
									<Input label="First Name" name="first-name" type="text" id="first-name"/>
									<Input label="Last Name" name="last-name" type="text" id="last-name"/>
								</div>
							</div>
							<div className="user-info">
								<div>
									<Input label="Username" name="username" type="text" id="username"/>
								</div>
								<div>
									<Input label="Password" name="password" type="text" id="password"/>
								</div>
							</div>
						</div>
						<div className="register-button">
							<button className="bg-primary-400 text-accent-400 fw-bold" type="submit">Sign Up</button>
						</div>
					</form>
				</div>
			</section>
			</>
    )
};