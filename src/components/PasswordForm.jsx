import {disableButton, generatePassword, passwordMap, passwordStrength} from '../utils';

export function PasswordForm({uppercase, lowercase, numbers, symbols, charactersLength, setState}) {
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === 'charactersLength') setState((prev) => ({...prev, [e.target.id]: e.target.value}));
    else setState((prev) => ({...prev, [e.target.id]: e.target.checked}));
  };

  const passwordStrenghtLabel = passwordMap[passwordStrength({uppercase, lowercase, numbers, symbols, charactersLength})];
  const isDisabled = disableButton({uppercase, lowercase, numbers, symbols, charactersLength});

  const handleGenerate = () => {
    const newPassword = generatePassword({uppercase, lowercase, numbers, symbols, charactersLength});
    setState((prev) => ({...prev, password: newPassword}));
  };

  return (
    <>
      <div className="form-holder">
        <div className="box">
          <div className="label-range">
            <p>Character Length</p>
            <h4>{charactersLength}</h4>
            <input id="charactersLength" value={charactersLength} onChange={handleChange} type="range" max="24" />
          </div>
        </div>
        <div className="inputs" />
        <label className="inputs-label" for="uppercase">
          <input onChange={handleChange} checked={uppercase} id="uppercase" type="checkbox" name="uppercase" />
          <span className="label-box"></span>
          <p>Include Uppercase Letters</p>
        </label>
        <label className="inputs-label" for="lowercase">
          <input onChange={handleChange} checked={lowercase} id="lowercase" type="checkbox" name="lowercase" />
          <span className="label-box"></span>
          <p>Include Lowercase Letters</p>
        </label>
        <label className="inputs-label" for="numbers">
          <input onChange={handleChange} checked={numbers} id="numbers" type="checkbox" name="numbers" />
          <span className="label-box"></span>
          <p> Include Numbers</p>
        </label>
        <label className="inputs-label" for="symbols">
          <input onChange={handleChange} checked={symbols} id="symbols" type="checkbox" name="symbols" />
          <span className="label-box"></span>
          <p>Include Symbols</p>
        </label>
      </div>
      <div className="strength-holder">
        <div className="strength">
          <p>Strength</p>
          <h4>{passwordStrenghtLabel.label}</h4>
          {new Array(4).fill(null).map(() => (
            <span className={`pipe ${passwordStrenghtLabel.className}`}></span>
          ))}
        </div>
      </div>
      <button disabled={isDisabled} onClick={handleGenerate}>
        <p>Generate</p>
        <img src="./assets/images/icon-arrow-right.svg" />
      </button>
    </>
  );
}
