import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { auth } from '../../firebase'
import uiConfig from '../../firebase/auth.ui.config'

export default () =>
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
