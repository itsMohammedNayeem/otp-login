# Phone OTP Login App

This is a simple React application for phone OTP (One-Time Password) login. It consists of two main components: `PhoneOtpForm` and `OtpInput`. Users can enter their phone number, receive an OTP, and enter the OTP to log in.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [PhoneOtpForm](#phoneotpform)
  - [OtpInput](#otpinput)
- [Styling](#styling)

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/itsMohammedNayeem/otp-login.git
    ```

2. Install the dependencies:

   ```shell
   npm install
   ```

3. Start the development server:

   ```shell
    npm run dev
    ```

## Usage

1. Enter your phone number and click on the `Send OTP` button.
2. Enter the OTP.

## Components

### PhoneOtpForm

This component is responsible for rendering the phone number input and the OTP input. It also handles the logic for sending the OTP and verifying it.

### OtpInput

This component is responsible for rendering the OTP input. It also handles the logic for sending the OTP and verifying it.

#### Props

| Name | Type | Description |
| --- | --- | --- |
| `onSubmit` | `function` | A function that is called when the OTP is verified. It is passed the phone number as an argument. |

## Styling

This application uses [Tailwind CSS](https://tailwindcss.com/) for styling. The styles are defined in the `tailwind.config.js` file.


![Screenshot 2024-01-18 at 3 03 51 PM](https://github.com/itsMohammedNayeem/otp-login/assets/127741549/62955e7e-9414-4778-8ec6-0ee3e92cd2b7)

![Screenshot 2024-01-18 at 3 03 24 PM](https://github.com/itsMohammedNayeem/otp-login/assets/127741549/31488188-f6a9-4487-944b-3963305c1798)

![Screen Recording 2024-01-18 at 2 48 14 PM](https://github.com/itsMohammedNayeem/otp-login/assets/127741549/e914345a-9ba9-4b06-bb9c-ff9b76e5c6f6)
