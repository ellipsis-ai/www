import * as React from 'react'
import autobind from '../lib/autobind';

export interface FormInputProps {
  autoFocus?: boolean,
  className?: string,
  style?: React.CSSProperties,
  id?: string,
  name?: string,
  onBlur?: (value: string) => void,
  onChange: (value: string) => void,
  onEnterKey?: () => void,
  onEscKey?: () => void,
  onFocus?: (value: string) => void,
  onDownKey?: () => void,
  onUpKey?: () => void,
  placeholder?: string,
  type?: string,
  value: string,
  disableAuto?: boolean,
  disabled?: boolean,
  readOnly?: boolean
}

class FormInput extends React.Component<FormInputProps> {
  input: HTMLInputElement | null | undefined;

  constructor(props: FormInputProps) {
    super(props);
    autobind(this);
  }

  onChange(): void {
    if (this.input) {
      this.props.onChange(this.input.value);
    }
  }

  onBlur(): void {
    if (typeof (this.props.onBlur) === 'function' && this.input) {
      this.props.onBlur(this.input.value);
    }
  }

  onFocus(): void {
    if (typeof (this.props.onFocus) === 'function' && this.input) {
      this.props.onFocus(this.input.value);
    }
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.which === 13) {
      event.preventDefault();
      if (typeof this.props.onEnterKey === 'function') {
        this.props.onEnterKey();
      }
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.which === 13 && this.props.onEscKey) {
      event.stopPropagation();
      event.preventDefault();
      this.props.onEscKey();
    } else if (event.which === 40 && typeof this.props.onDownKey === 'function') {
      event.preventDefault();
      this.props.onDownKey();
    } else if (event.which === 38 && typeof this.props.onUpKey === 'function') {
      event.preventDefault();
      this.props.onUpKey();
    }
  }

  isEmpty(): boolean {
    return !this.input || !this.input.value;
  }

  focus(): void {
    setTimeout(() => {
      if (this.input) {
        this.input.focus();
      }
    }, 1);
  }

  blur() {
    if (this.input) {
      this.input.blur();
    }
  }

  select() {
    if (this.input) {
      this.input.select();
    }
  }

  componentDidMount(): void {
    // Need to add keystroke handlers directly with the DOM, because React events don't bubble up all the way
    if (this.input) {
      this.input.addEventListener('keydown', this.handleKeyDown, false);
      this.input.addEventListener('keypress', this.handleKeyPress, false);
    }
  }

  render() {
    return (
      <input
        type={this.props.type || "text"}
        className={"form-input " + (this.props.className || "")}
        style={this.props.style}
        ref={(el) => this.input = el}
        id={this.props.id}
        name={this.props.name}
        value={this.props.value}
        placeholder={this.props.placeholder}
        autoFocus={this.props.autoFocus}
        onChange={this.onChange}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        autoCapitalize={this.props.disableAuto ? "off" : undefined}
        autoComplete={this.props.disableAuto ? "off" : undefined}
        autoCorrect={this.props.disableAuto ? "off" : undefined}
        spellCheck={this.props.disableAuto ? false : undefined}
        disabled={!!this.props.disabled}
        readOnly={!!this.props.readOnly}
      />
    );
  }
}

export default FormInput;
