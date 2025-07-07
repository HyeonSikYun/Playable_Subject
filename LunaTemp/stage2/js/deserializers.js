var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointSpring' )
  var i475 = data
  i474.spring = i475[0]
  i474.damper = i475[1]
  i474.targetPosition = i475[2]
  return i474
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointMotor' )
  var i477 = data
  i476.m_TargetVelocity = i477[0]
  i476.m_Force = i477[1]
  i476.m_FreeSpin = i477[2]
  return i476
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointLimits' )
  var i479 = data
  i478.m_Min = i479[0]
  i478.m_Max = i479[1]
  i478.m_Bounciness = i479[2]
  i478.m_BounceMinVelocity = i479[3]
  i478.m_ContactDistance = i479[4]
  i478.minBounce = i479[5]
  i478.maxBounce = i479[6]
  return i478
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointDrive' )
  var i481 = data
  i480.m_PositionSpring = i481[0]
  i480.m_PositionDamper = i481[1]
  i480.m_MaximumForce = i481[2]
  i480.m_UseAcceleration = i481[3]
  return i480
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i483 = data
  i482.m_Spring = i483[0]
  i482.m_Damper = i483[1]
  return i482
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i485 = data
  i484.m_Limit = i485[0]
  i484.m_Bounciness = i485[1]
  i484.m_ContactDistance = i485[2]
  return i484
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i487 = data
  i486.m_ExtremumSlip = i487[0]
  i486.m_ExtremumValue = i487[1]
  i486.m_AsymptoteSlip = i487[2]
  i486.m_AsymptoteValue = i487[3]
  i486.m_Stiffness = i487[4]
  return i486
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i489 = data
  i488.m_LowerAngle = i489[0]
  i488.m_UpperAngle = i489[1]
  return i488
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i491 = data
  i490.m_MotorSpeed = i491[0]
  i490.m_MaximumMotorTorque = i491[1]
  return i490
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i493 = data
  i492.m_DampingRatio = i493[0]
  i492.m_Frequency = i493[1]
  i492.m_Angle = i493[2]
  return i492
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i495 = data
  i494.m_LowerTranslation = i495[0]
  i494.m_UpperTranslation = i495[1]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i497 = data
  i496.name = i497[0]
  i496.width = i497[1]
  i496.height = i497[2]
  i496.mipmapCount = i497[3]
  i496.anisoLevel = i497[4]
  i496.filterMode = i497[5]
  i496.hdr = !!i497[6]
  i496.format = i497[7]
  i496.wrapMode = i497[8]
  i496.alphaIsTransparency = !!i497[9]
  i496.alphaSource = i497[10]
  i496.graphicsFormat = i497[11]
  i496.sRGBTexture = !!i497[12]
  i496.desiredColorSpace = i497[13]
  i496.wrapU = i497[14]
  i496.wrapV = i497[15]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i499 = data
  i498.position = new pc.Vec3( i499[0], i499[1], i499[2] )
  i498.scale = new pc.Vec3( i499[3], i499[4], i499[5] )
  i498.rotation = new pc.Quat(i499[6], i499[7], i499[8], i499[9])
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i501 = data
  request.r(i501[0], i501[1], 0, i500, 'sharedMesh')
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i503 = data
  request.r(i503[0], i503[1], 0, i502, 'additionalVertexStreams')
  i502.enabled = !!i503[2]
  request.r(i503[3], i503[4], 0, i502, 'sharedMaterial')
  var i505 = i503[5]
  var i504 = []
  for(var i = 0; i < i505.length; i += 2) {
  request.r(i505[i + 0], i505[i + 1], 2, i504, '')
  }
  i502.sharedMaterials = i504
  i502.receiveShadows = !!i503[6]
  i502.shadowCastingMode = i503[7]
  i502.sortingLayerID = i503[8]
  i502.sortingOrder = i503[9]
  i502.lightmapIndex = i503[10]
  i502.lightmapSceneIndex = i503[11]
  i502.lightmapScaleOffset = new pc.Vec4( i503[12], i503[13], i503[14], i503[15] )
  i502.lightProbeUsage = i503[16]
  i502.reflectionProbeUsage = i503[17]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i509 = data
  i508.center = new pc.Vec3( i509[0], i509[1], i509[2] )
  i508.size = new pc.Vec3( i509[3], i509[4], i509[5] )
  i508.enabled = !!i509[6]
  i508.isTrigger = !!i509[7]
  request.r(i509[8], i509[9], 0, i508, 'material')
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i511 = data
  i510.name = i511[0]
  i510.tagId = i511[1]
  i510.enabled = !!i511[2]
  i510.isStatic = !!i511[3]
  i510.layer = i511[4]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i513 = data
  i512.name = i513[0]
  i512.halfPrecision = !!i513[1]
  i512.useUInt32IndexFormat = !!i513[2]
  i512.vertexCount = i513[3]
  i512.aabb = i513[4]
  var i515 = i513[5]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( !!i515[i + 0] );
  }
  i512.streams = i514
  i512.vertices = i513[6]
  var i517 = i513[7]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i517[i + 0]) );
  }
  i512.subMeshes = i516
  var i519 = i513[8]
  var i518 = []
  for(var i = 0; i < i519.length; i += 16) {
    i518.push( new pc.Mat4().setData(i519[i + 0], i519[i + 1], i519[i + 2], i519[i + 3],  i519[i + 4], i519[i + 5], i519[i + 6], i519[i + 7],  i519[i + 8], i519[i + 9], i519[i + 10], i519[i + 11],  i519[i + 12], i519[i + 13], i519[i + 14], i519[i + 15]) );
  }
  i512.bindposes = i518
  var i521 = i513[9]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i521[i + 0]) );
  }
  i512.blendShapes = i520
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i527 = data
  i526.triangles = i527[0]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i533 = data
  i532.name = i533[0]
  var i535 = i533[1]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i535[i + 0]) );
  }
  i532.frames = i534
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i536 = root || new pc.UnityMaterial()
  var i537 = data
  i536.name = i537[0]
  request.r(i537[1], i537[2], 0, i536, 'shader')
  i536.renderQueue = i537[3]
  i536.enableInstancing = !!i537[4]
  var i539 = i537[5]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i539[i + 0]) );
  }
  i536.floatParameters = i538
  var i541 = i537[6]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i541[i + 0]) );
  }
  i536.colorParameters = i540
  var i543 = i537[7]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i543[i + 0]) );
  }
  i536.vectorParameters = i542
  var i545 = i537[8]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i545[i + 0]) );
  }
  i536.textureParameters = i544
  var i547 = i537[9]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i547[i + 0]) );
  }
  i536.materialFlags = i546
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i551 = data
  i550.name = i551[0]
  i550.value = i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i555 = data
  i554.name = i555[0]
  i554.value = new pc.Color(i555[1], i555[2], i555[3], i555[4])
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i559 = data
  i558.name = i559[0]
  i558.value = new pc.Vec4( i559[1], i559[2], i559[3], i559[4] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i563 = data
  i562.name = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'value')
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i567 = data
  i566.name = i567[0]
  i566.enabled = !!i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i569 = data
  i568.name = i569[0]
  i568.atlasId = i569[1]
  i568.mipmapCount = i569[2]
  i568.hdr = !!i569[3]
  i568.size = i569[4]
  i568.anisoLevel = i569[5]
  i568.filterMode = i569[6]
  var i571 = i569[7]
  var i570 = []
  for(var i = 0; i < i571.length; i += 4) {
    i570.push( UnityEngine.Rect.MinMaxRect(i571[i + 0], i571[i + 1], i571[i + 2], i571[i + 3]) );
  }
  i568.rects = i570
  i568.wrapU = i569[8]
  i568.wrapV = i569[9]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i575 = data
  i574.name = i575[0]
  i574.index = i575[1]
  i574.startup = !!i575[2]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i577 = data
  i576.enabled = !!i577[0]
  i576.aspect = i577[1]
  i576.orthographic = !!i577[2]
  i576.orthographicSize = i577[3]
  i576.backgroundColor = new pc.Color(i577[4], i577[5], i577[6], i577[7])
  i576.nearClipPlane = i577[8]
  i576.farClipPlane = i577[9]
  i576.fieldOfView = i577[10]
  i576.depth = i577[11]
  i576.clearFlags = i577[12]
  i576.cullingMask = i577[13]
  i576.rect = i577[14]
  request.r(i577[15], i577[16], 0, i576, 'targetTexture')
  i576.usePhysicalProperties = !!i577[17]
  i576.focalLength = i577[18]
  i576.sensorSize = new pc.Vec2( i577[19], i577[20] )
  i576.lensShift = new pc.Vec2( i577[21], i577[22] )
  i576.gateFit = i577[23]
  i576.commandBufferCount = i577[24]
  i576.cameraType = i577[25]
  return i576
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i579 = data
  i578.m_RenderShadows = !!i579[0]
  i578.m_RequiresDepthTextureOption = i579[1]
  i578.m_RequiresOpaqueTextureOption = i579[2]
  i578.m_CameraType = i579[3]
  var i581 = i579[4]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 1, i580, '')
  }
  i578.m_Cameras = i580
  i578.m_RendererIndex = i579[5]
  i578.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i579[6] )
  request.r(i579[7], i579[8], 0, i578, 'm_VolumeTrigger')
  i578.m_VolumeFrameworkUpdateModeOption = i579[9]
  i578.m_RenderPostProcessing = !!i579[10]
  i578.m_Antialiasing = i579[11]
  i578.m_AntialiasingQuality = i579[12]
  i578.m_StopNaN = !!i579[13]
  i578.m_Dithering = !!i579[14]
  i578.m_ClearDepth = !!i579[15]
  i578.m_AllowXRRendering = !!i579[16]
  i578.m_AllowHDROutput = !!i579[17]
  i578.m_UseScreenCoordOverride = !!i579[18]
  i578.m_ScreenSizeOverride = new pc.Vec4( i579[19], i579[20], i579[21], i579[22] )
  i578.m_ScreenCoordScaleBias = new pc.Vec4( i579[23], i579[24], i579[25], i579[26] )
  i578.m_RequiresDepthTexture = !!i579[27]
  i578.m_RequiresColorTexture = !!i579[28]
  i578.m_Version = i579[29]
  i578.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i579[30], i578.m_TaaSettings)
  return i578
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i585 = data
  i584.m_Quality = i585[0]
  i584.m_FrameInfluence = i585[1]
  i584.m_JitterScale = i585[2]
  i584.m_MipBias = i585[3]
  i584.m_VarianceClampScale = i585[4]
  i584.m_ContrastAdaptiveSharpening = i585[5]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i587 = data
  i586.enabled = !!i587[0]
  i586.type = i587[1]
  i586.color = new pc.Color(i587[2], i587[3], i587[4], i587[5])
  i586.cullingMask = i587[6]
  i586.intensity = i587[7]
  i586.range = i587[8]
  i586.spotAngle = i587[9]
  i586.shadows = i587[10]
  i586.shadowNormalBias = i587[11]
  i586.shadowBias = i587[12]
  i586.shadowStrength = i587[13]
  i586.shadowResolution = i587[14]
  i586.lightmapBakeType = i587[15]
  i586.renderMode = i587[16]
  request.r(i587[17], i587[18], 0, i586, 'cookie')
  i586.cookieSize = i587[19]
  return i586
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i589 = data
  i588.m_Version = i589[0]
  i588.m_UsePipelineSettings = !!i589[1]
  i588.m_AdditionalLightsShadowResolutionTier = i589[2]
  i588.m_LightLayerMask = i589[3]
  i588.m_RenderingLayers = i589[4]
  i588.m_CustomShadowLayers = !!i589[5]
  i588.m_ShadowLayerMask = i589[6]
  i588.m_ShadowRenderingLayers = i589[7]
  i588.m_LightCookieSize = new pc.Vec2( i589[8], i589[9] )
  i588.m_LightCookieOffset = new pc.Vec2( i589[10], i589[11] )
  i588.m_SoftShadowQuality = i589[12]
  return i588
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i591 = data
  i590.priority = i591[0]
  i590.blendDistance = i591[1]
  i590.weight = i591[2]
  request.r(i591[3], i591[4], 0, i590, 'sharedProfile')
  i590.m_IsGlobal = !!i591[5]
  return i590
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'm_FirstSelected')
  i592.m_sendNavigationEvents = !!i593[2]
  i592.m_DragThreshold = i593[3]
  return i592
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i595 = data
  i594.m_HorizontalAxis = i595[0]
  i594.m_VerticalAxis = i595[1]
  i594.m_SubmitButton = i595[2]
  i594.m_CancelButton = i595[3]
  i594.m_InputActionsPerSecond = i595[4]
  i594.m_RepeatDelay = i595[5]
  i594.m_ForceModuleActive = !!i595[6]
  i594.m_SendPointerHoverToParent = !!i595[7]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i597 = data
  i596.pivot = new pc.Vec2( i597[0], i597[1] )
  i596.anchorMin = new pc.Vec2( i597[2], i597[3] )
  i596.anchorMax = new pc.Vec2( i597[4], i597[5] )
  i596.sizeDelta = new pc.Vec2( i597[6], i597[7] )
  i596.anchoredPosition3D = new pc.Vec3( i597[8], i597[9], i597[10] )
  i596.rotation = new pc.Quat(i597[11], i597[12], i597[13], i597[14])
  i596.scale = new pc.Vec3( i597[15], i597[16], i597[17] )
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i599 = data
  i598.enabled = !!i599[0]
  i598.planeDistance = i599[1]
  i598.referencePixelsPerUnit = i599[2]
  i598.isFallbackOverlay = !!i599[3]
  i598.renderMode = i599[4]
  i598.renderOrder = i599[5]
  i598.sortingLayerName = i599[6]
  i598.sortingOrder = i599[7]
  i598.scaleFactor = i599[8]
  request.r(i599[9], i599[10], 0, i598, 'worldCamera')
  i598.overrideSorting = !!i599[11]
  i598.pixelPerfect = !!i599[12]
  i598.targetDisplay = i599[13]
  i598.overridePixelPerfect = !!i599[14]
  return i598
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i601 = data
  i600.m_UiScaleMode = i601[0]
  i600.m_ReferencePixelsPerUnit = i601[1]
  i600.m_ScaleFactor = i601[2]
  i600.m_ReferenceResolution = new pc.Vec2( i601[3], i601[4] )
  i600.m_ScreenMatchMode = i601[5]
  i600.m_MatchWidthOrHeight = i601[6]
  i600.m_PhysicalUnit = i601[7]
  i600.m_FallbackScreenDPI = i601[8]
  i600.m_DefaultSpriteDPI = i601[9]
  i600.m_DynamicPixelsPerUnit = i601[10]
  i600.m_PresetInfoIsWorld = !!i601[11]
  return i600
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i603 = data
  i602.m_IgnoreReversedGraphics = !!i603[0]
  i602.m_BlockingObjects = i603[1]
  i602.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i603[2] )
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i605 = data
  i604.cullTransparentMesh = !!i605[0]
  return i604
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.Image' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'm_Sprite')
  i606.m_Type = i607[2]
  i606.m_PreserveAspect = !!i607[3]
  i606.m_FillCenter = !!i607[4]
  i606.m_FillMethod = i607[5]
  i606.m_FillAmount = i607[6]
  i606.m_FillClockwise = !!i607[7]
  i606.m_FillOrigin = i607[8]
  i606.m_UseSpriteMesh = !!i607[9]
  i606.m_PixelsPerUnitMultiplier = i607[10]
  request.r(i607[11], i607[12], 0, i606, 'm_Material')
  i606.m_Maskable = !!i607[13]
  i606.m_Color = new pc.Color(i607[14], i607[15], i607[16], i607[17])
  i606.m_RaycastTarget = !!i607[18]
  i606.m_RaycastPadding = new pc.Vec4( i607[19], i607[20], i607[21], i607[22] )
  return i606
}

Deserializers["GameManager"] = function (request, data, root) {
  var i608 = root || request.c( 'GameManager' )
  var i609 = data
  var i611 = i609[0]
  var i610 = []
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 2, i610, '')
  }
  i608.itemPrefabs = i610
  request.r(i609[1], i609[2], 0, i608, 'gridParent')
  i608.swapDuration = i609[3]
  i608.destroyDuration = i609[4]
  i608.refillDuration = i609[5]
  i608.shuffleDuration = i609[6]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i615 = data
  i614.ambientIntensity = i615[0]
  i614.reflectionIntensity = i615[1]
  i614.ambientMode = i615[2]
  i614.ambientLight = new pc.Color(i615[3], i615[4], i615[5], i615[6])
  i614.ambientSkyColor = new pc.Color(i615[7], i615[8], i615[9], i615[10])
  i614.ambientGroundColor = new pc.Color(i615[11], i615[12], i615[13], i615[14])
  i614.ambientEquatorColor = new pc.Color(i615[15], i615[16], i615[17], i615[18])
  i614.fogColor = new pc.Color(i615[19], i615[20], i615[21], i615[22])
  i614.fogEndDistance = i615[23]
  i614.fogStartDistance = i615[24]
  i614.fogDensity = i615[25]
  i614.fog = !!i615[26]
  request.r(i615[27], i615[28], 0, i614, 'skybox')
  i614.fogMode = i615[29]
  var i617 = i615[30]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i617[i + 0]) );
  }
  i614.lightmaps = i616
  i614.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i615[31], i614.lightProbes)
  i614.lightmapsMode = i615[32]
  i614.mixedBakeMode = i615[33]
  i614.environmentLightingMode = i615[34]
  i614.ambientProbe = new pc.SphericalHarmonicsL2(i615[35])
  i614.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i615[36])
  i614.useReferenceAmbientProbe = !!i615[37]
  request.r(i615[38], i615[39], 0, i614, 'customReflection')
  request.r(i615[40], i615[41], 0, i614, 'defaultReflection')
  i614.defaultReflectionMode = i615[42]
  i614.defaultReflectionResolution = i615[43]
  i614.sunLightObjectId = i615[44]
  i614.pixelLightCount = i615[45]
  i614.defaultReflectionHDR = !!i615[46]
  i614.hasLightDataAsset = !!i615[47]
  i614.hasManualGenerate = !!i615[48]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'lightmapColor')
  request.r(i621[2], i621[3], 0, i620, 'lightmapDirection')
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i622 = root || new UnityEngine.LightProbes()
  var i623 = data
  return i622
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'panelPrefab')
  var i633 = i631[2]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i633.length; i += 1) {
    i632.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i633[i + 0]));
  }
  i630.prefabs = i632
  return i630
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i637 = data
  i636.type = i637[0]
  request.r(i637[1], i637[2], 0, i636, 'prefab')
  return i636
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i639 = data
  i638.m_Spacing = i639[0]
  i638.m_ChildForceExpandWidth = !!i639[1]
  i638.m_ChildForceExpandHeight = !!i639[2]
  i638.m_ChildControlWidth = !!i639[3]
  i638.m_ChildControlHeight = !!i639[4]
  i638.m_ChildScaleWidth = !!i639[5]
  i638.m_ChildScaleHeight = !!i639[6]
  i638.m_ReverseArrangement = !!i639[7]
  i638.m_Padding = UnityEngine.RectOffset.FromPaddings(i639[8], i639[9], i639[10], i639[11])
  i638.m_ChildAlignment = i639[12]
  return i638
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i641 = data
  i640.m_HorizontalFit = i641[0]
  i640.m_VerticalFit = i641[1]
  return i640
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'contentHolder')
  return i642
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'nameLabel')
  request.r(i645[2], i645[3], 0, i644, 'scrollRect')
  request.r(i645[4], i645[5], 0, i644, 'viewport')
  request.r(i645[6], i645[7], 0, i644, 'Canvas')
  return i644
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i647 = data
  i646.m_IgnoreLayout = !!i647[0]
  i646.m_MinWidth = i647[1]
  i646.m_MinHeight = i647[2]
  i646.m_PreferredWidth = i647[3]
  i646.m_PreferredHeight = i647[4]
  i646.m_FlexibleWidth = i647[5]
  i646.m_FlexibleHeight = i647[6]
  i646.m_LayoutPriority = i647[7]
  return i646
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.Button' )
  var i649 = data
  i648.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i649[0], i648.m_OnClick)
  i648.m_Navigation = request.d('UnityEngine.UI.Navigation', i649[1], i648.m_Navigation)
  i648.m_Transition = i649[2]
  i648.m_Colors = request.d('UnityEngine.UI.ColorBlock', i649[3], i648.m_Colors)
  i648.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i649[4], i648.m_SpriteState)
  i648.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i649[5], i648.m_AnimationTriggers)
  i648.m_Interactable = !!i649[6]
  request.r(i649[7], i649[8], 0, i648, 'm_TargetGraphic')
  return i648
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i651 = data
  i650.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i651[0], i650.m_PersistentCalls)
  return i650
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i653 = data
  var i655 = i653[0]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('UnityEngine.Events.PersistentCall', i655[i + 0]));
  }
  i652.m_Calls = i654
  return i652
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'm_Target')
  i658.m_TargetAssemblyTypeName = i659[2]
  i658.m_MethodName = i659[3]
  i658.m_Mode = i659[4]
  i658.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i659[5], i658.m_Arguments)
  i658.m_CallState = i659[6]
  return i658
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'm_ObjectArgument')
  i660.m_ObjectArgumentAssemblyTypeName = i661[2]
  i660.m_IntArgument = i661[3]
  i660.m_FloatArgument = i661[4]
  i660.m_StringArgument = i661[5]
  i660.m_BoolArgument = !!i661[6]
  return i660
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i663 = data
  i662.m_Mode = i663[0]
  i662.m_WrapAround = !!i663[1]
  request.r(i663[2], i663[3], 0, i662, 'm_SelectOnUp')
  request.r(i663[4], i663[5], 0, i662, 'm_SelectOnDown')
  request.r(i663[6], i663[7], 0, i662, 'm_SelectOnLeft')
  request.r(i663[8], i663[9], 0, i662, 'm_SelectOnRight')
  return i662
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i665 = data
  i664.m_NormalColor = new pc.Color(i665[0], i665[1], i665[2], i665[3])
  i664.m_HighlightedColor = new pc.Color(i665[4], i665[5], i665[6], i665[7])
  i664.m_PressedColor = new pc.Color(i665[8], i665[9], i665[10], i665[11])
  i664.m_SelectedColor = new pc.Color(i665[12], i665[13], i665[14], i665[15])
  i664.m_DisabledColor = new pc.Color(i665[16], i665[17], i665[18], i665[19])
  i664.m_ColorMultiplier = i665[20]
  i664.m_FadeDuration = i665[21]
  return i664
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_HighlightedSprite')
  request.r(i667[2], i667[3], 0, i666, 'm_PressedSprite')
  request.r(i667[4], i667[5], 0, i666, 'm_SelectedSprite')
  request.r(i667[6], i667[7], 0, i666, 'm_DisabledSprite')
  return i666
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i669 = data
  i668.m_NormalTrigger = i669[0]
  i668.m_HighlightedTrigger = i669[1]
  i668.m_PressedTrigger = i669[2]
  i668.m_SelectedTrigger = i669[3]
  i668.m_DisabledTrigger = i669[4]
  return i668
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.Text' )
  var i671 = data
  i670.m_FontData = request.d('UnityEngine.UI.FontData', i671[0], i670.m_FontData)
  i670.m_Text = i671[1]
  request.r(i671[2], i671[3], 0, i670, 'm_Material')
  i670.m_Maskable = !!i671[4]
  i670.m_Color = new pc.Color(i671[5], i671[6], i671[7], i671[8])
  i670.m_RaycastTarget = !!i671[9]
  i670.m_RaycastPadding = new pc.Vec4( i671[10], i671[11], i671[12], i671[13] )
  return i670
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.FontData' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'm_Font')
  i672.m_FontSize = i673[2]
  i672.m_FontStyle = i673[3]
  i672.m_BestFit = !!i673[4]
  i672.m_MinSize = i673[5]
  i672.m_MaxSize = i673[6]
  i672.m_Alignment = i673[7]
  i672.m_AlignByGeometry = !!i673[8]
  i672.m_RichText = !!i673[9]
  i672.m_HorizontalOverflow = i673[10]
  i672.m_VerticalOverflow = i673[11]
  i672.m_LineSpacing = i673[12]
  return i672
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_Content')
  i674.m_Horizontal = !!i675[2]
  i674.m_Vertical = !!i675[3]
  i674.m_MovementType = i675[4]
  i674.m_Elasticity = i675[5]
  i674.m_Inertia = !!i675[6]
  i674.m_DecelerationRate = i675[7]
  i674.m_ScrollSensitivity = i675[8]
  request.r(i675[9], i675[10], 0, i674, 'm_Viewport')
  request.r(i675[11], i675[12], 0, i674, 'm_HorizontalScrollbar')
  request.r(i675[13], i675[14], 0, i674, 'm_VerticalScrollbar')
  i674.m_HorizontalScrollbarVisibility = i675[15]
  i674.m_VerticalScrollbarVisibility = i675[16]
  i674.m_HorizontalScrollbarSpacing = i675[17]
  i674.m_VerticalScrollbarSpacing = i675[18]
  i674.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i675[19], i674.m_OnValueChanged)
  return i674
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i677 = data
  i676.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i677[0], i676.m_PersistentCalls)
  return i676
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.Mask' )
  var i679 = data
  i678.m_ShowMaskGraphic = !!i679[0]
  return i678
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_HandleRect')
  i680.m_Direction = i681[2]
  i680.m_Value = i681[3]
  i680.m_Size = i681[4]
  i680.m_NumberOfSteps = i681[5]
  i680.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i681[6], i680.m_OnValueChanged)
  i680.m_Navigation = request.d('UnityEngine.UI.Navigation', i681[7], i680.m_Navigation)
  i680.m_Transition = i681[8]
  i680.m_Colors = request.d('UnityEngine.UI.ColorBlock', i681[9], i680.m_Colors)
  i680.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i681[10], i680.m_SpriteState)
  i680.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i681[11], i680.m_AnimationTriggers)
  i680.m_Interactable = !!i681[12]
  request.r(i681[13], i681[14], 0, i680, 'm_TargetGraphic')
  return i680
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i683 = data
  i682.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i683[0], i682.m_PersistentCalls)
  return i682
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i685 = data
  var i687 = i685[0]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i687.length; i += 1) {
    i686.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i687[i + 0]));
  }
  i684.m_Delegates = i686
  return i684
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i691 = data
  i690.eventID = i691[0]
  i690.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i691[1], i690.callback)
  return i690
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i693 = data
  i692.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i693[0], i692.m_PersistentCalls)
  return i692
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'nameLabel')
  request.r(i695[2], i695[3], 0, i694, 'valueLabel')
  i694.colorDefault = new pc.Color(i695[4], i695[5], i695[6], i695[7])
  i694.colorSelected = new pc.Color(i695[8], i695[9], i695[10], i695[11])
  return i694
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'nameLabel')
  request.r(i697[2], i697[3], 0, i696, 'valueToggle')
  request.r(i697[4], i697[5], 0, i696, 'checkmarkImage')
  i696.colorDefault = new pc.Color(i697[6], i697[7], i697[8], i697[9])
  i696.colorSelected = new pc.Color(i697[10], i697[11], i697[12], i697[13])
  return i696
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i699 = data
  i698.toggleTransition = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'graphic')
  i698.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i699[3], i698.onValueChanged)
  request.r(i699[4], i699[5], 0, i698, 'm_Group')
  i698.m_IsOn = !!i699[6]
  i698.m_Navigation = request.d('UnityEngine.UI.Navigation', i699[7], i698.m_Navigation)
  i698.m_Transition = i699[8]
  i698.m_Colors = request.d('UnityEngine.UI.ColorBlock', i699[9], i698.m_Colors)
  i698.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i699[10], i698.m_SpriteState)
  i698.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i699[11], i698.m_AnimationTriggers)
  i698.m_Interactable = !!i699[12]
  request.r(i699[13], i699[14], 0, i698, 'm_TargetGraphic')
  return i698
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i701 = data
  i700.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i701[0], i700.m_PersistentCalls)
  return i700
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'nameLabel')
  request.r(i703[2], i703[3], 0, i702, 'valueLabel')
  i702.colorDefault = new pc.Color(i703[4], i703[5], i703[6], i703[7])
  i702.colorSelected = new pc.Color(i703[8], i703[9], i703[10], i703[11])
  return i702
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'nameLabel')
  request.r(i705[2], i705[3], 0, i704, 'valueLabel')
  i704.colorDefault = new pc.Color(i705[4], i705[5], i705[6], i705[7])
  i704.colorSelected = new pc.Color(i705[8], i705[9], i705[10], i705[11])
  return i704
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'nameLabel')
  request.r(i707[2], i707[3], 0, i706, 'valueLabel')
  i706.colorDefault = new pc.Color(i707[4], i707[5], i707[6], i707[7])
  i706.colorSelected = new pc.Color(i707[8], i707[9], i707[10], i707[11])
  return i706
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'nextButtonText')
  request.r(i709[2], i709[3], 0, i708, 'previousButtonText')
  request.r(i709[4], i709[5], 0, i708, 'nameLabel')
  request.r(i709[6], i709[7], 0, i708, 'valueLabel')
  i708.colorDefault = new pc.Color(i709[8], i709[9], i709[10], i709[11])
  i708.colorSelected = new pc.Color(i709[12], i709[13], i709[14], i709[15])
  return i708
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'nameLabel')
  i710.colorDefault = new pc.Color(i711[2], i711[3], i711[4], i711[5])
  i710.colorSelected = new pc.Color(i711[6], i711[7], i711[8], i711[9])
  return i710
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'nameLabel')
  request.r(i713[2], i713[3], 0, i712, 'valueToggle')
  i712.colorDefault = new pc.Color(i713[4], i713[5], i713[6], i713[7])
  i712.colorSelected = new pc.Color(i713[8], i713[9], i713[10], i713[11])
  return i712
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i715 = data
  i714.toggleTransition = i715[0]
  request.r(i715[1], i715[2], 0, i714, 'graphic')
  i714.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i715[3], i714.onValueChanged)
  request.r(i715[4], i715[5], 0, i714, 'content')
  request.r(i715[6], i715[7], 0, i714, 'arrowOpened')
  request.r(i715[8], i715[9], 0, i714, 'arrowClosed')
  request.r(i715[10], i715[11], 0, i714, 'm_Group')
  i714.m_IsOn = !!i715[12]
  i714.m_Navigation = request.d('UnityEngine.UI.Navigation', i715[13], i714.m_Navigation)
  i714.m_Transition = i715[14]
  i714.m_Colors = request.d('UnityEngine.UI.ColorBlock', i715[15], i714.m_Colors)
  i714.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i715[16], i714.m_SpriteState)
  i714.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i715[17], i714.m_AnimationTriggers)
  i714.m_Interactable = !!i715[18]
  request.r(i715[19], i715[20], 0, i714, 'm_TargetGraphic')
  return i714
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'nameLabel')
  request.r(i717[2], i717[3], 0, i716, 'valueToggle')
  request.r(i717[4], i717[5], 0, i716, 'colorImage')
  request.r(i717[6], i717[7], 0, i716, 'fieldR')
  request.r(i717[8], i717[9], 0, i716, 'fieldG')
  request.r(i717[10], i717[11], 0, i716, 'fieldB')
  request.r(i717[12], i717[13], 0, i716, 'fieldA')
  i716.colorDefault = new pc.Color(i717[14], i717[15], i717[16], i717[17])
  i716.colorSelected = new pc.Color(i717[18], i717[19], i717[20], i717[21])
  return i716
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'nameLabel')
  request.r(i719[2], i719[3], 0, i718, 'valueLabel')
  i718.colorDefault = new pc.Color(i719[4], i719[5], i719[6], i719[7])
  i718.colorSelected = new pc.Color(i719[8], i719[9], i719[10], i719[11])
  return i718
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'nameLabel')
  request.r(i721[2], i721[3], 0, i720, 'valueToggle')
  request.r(i721[4], i721[5], 0, i720, 'fieldX')
  request.r(i721[6], i721[7], 0, i720, 'fieldY')
  i720.colorDefault = new pc.Color(i721[8], i721[9], i721[10], i721[11])
  i720.colorSelected = new pc.Color(i721[12], i721[13], i721[14], i721[15])
  return i720
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'nameLabel')
  request.r(i723[2], i723[3], 0, i722, 'valueToggle')
  request.r(i723[4], i723[5], 0, i722, 'fieldX')
  request.r(i723[6], i723[7], 0, i722, 'fieldY')
  request.r(i723[8], i723[9], 0, i722, 'fieldZ')
  i722.colorDefault = new pc.Color(i723[10], i723[11], i723[12], i723[13])
  i722.colorSelected = new pc.Color(i723[14], i723[15], i723[16], i723[17])
  return i722
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'nameLabel')
  request.r(i725[2], i725[3], 0, i724, 'valueToggle')
  request.r(i725[4], i725[5], 0, i724, 'fieldX')
  request.r(i725[6], i725[7], 0, i724, 'fieldY')
  request.r(i725[8], i725[9], 0, i724, 'fieldZ')
  request.r(i725[10], i725[11], 0, i724, 'fieldW')
  i724.colorDefault = new pc.Color(i725[12], i725[13], i725[14], i725[15])
  i724.colorSelected = new pc.Color(i725[16], i725[17], i725[18], i725[19])
  return i724
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i727 = data
  i726.colorDefault = new pc.Color(i727[0], i727[1], i727[2], i727[3])
  i726.colorSelected = new pc.Color(i727[4], i727[5], i727[6], i727[7])
  return i726
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i729 = data
  i728.m_Spacing = i729[0]
  i728.m_ChildForceExpandWidth = !!i729[1]
  i728.m_ChildForceExpandHeight = !!i729[2]
  i728.m_ChildControlWidth = !!i729[3]
  i728.m_ChildControlHeight = !!i729[4]
  i728.m_ChildScaleWidth = !!i729[5]
  i728.m_ChildScaleHeight = !!i729[6]
  i728.m_ReverseArrangement = !!i729[7]
  i728.m_Padding = UnityEngine.RectOffset.FromPaddings(i729[8], i729[9], i729[10], i729[11])
  i728.m_ChildAlignment = i729[12]
  return i728
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i731 = data
  i730.colorDefault = new pc.Color(i731[0], i731[1], i731[2], i731[3])
  i730.colorSelected = new pc.Color(i731[4], i731[5], i731[6], i731[7])
  return i730
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'nameLabel')
  request.r(i733[2], i733[3], 0, i732, 'header')
  i732.colorDefault = new pc.Color(i733[4], i733[5], i733[6], i733[7])
  i732.colorSelected = new pc.Color(i733[8], i733[9], i733[10], i733[11])
  return i732
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'nameLabel')
  request.r(i735[2], i735[3], 0, i734, 'valueToggle')
  var i737 = i735[4]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 1, i736, '')
  }
  i734.toggles = i736
  i734.colorDefault = new pc.Color(i735[5], i735[6], i735[7], i735[8])
  i734.colorSelected = new pc.Color(i735[9], i735[10], i735[11], i735[12])
  return i734
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'nameLabel')
  request.r(i741[2], i741[3], 0, i740, 'valueToggle')
  request.r(i741[4], i741[5], 0, i740, 'checkmarkImage')
  i740.colorDefault = new pc.Color(i741[6], i741[7], i741[8], i741[9])
  i740.colorSelected = new pc.Color(i741[10], i741[11], i741[12], i741[13])
  return i740
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'nameLabel')
  request.r(i743[2], i743[3], 0, i742, 'valueToggle')
  request.r(i743[4], i743[5], 0, i742, 'checkmarkImage')
  i742.colorDefault = new pc.Color(i743[6], i743[7], i743[8], i743[9])
  i742.colorSelected = new pc.Color(i743[10], i743[11], i743[12], i743[13])
  return i742
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'nextButtonText')
  request.r(i745[2], i745[3], 0, i744, 'previousButtonText')
  request.r(i745[4], i745[5], 0, i744, 'nameLabel')
  request.r(i745[6], i745[7], 0, i744, 'valueLabel')
  i744.colorDefault = new pc.Color(i745[8], i745[9], i745[10], i745[11])
  i744.colorSelected = new pc.Color(i745[12], i745[13], i745[14], i745[15])
  return i744
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'nameLabel')
  request.r(i747[2], i747[3], 0, i746, 'valueToggle')
  i746.colorDefault = new pc.Color(i747[4], i747[5], i747[6], i747[7])
  i746.colorSelected = new pc.Color(i747[8], i747[9], i747[10], i747[11])
  return i746
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'nameLabel')
  i748.colorDefault = new pc.Color(i749[2], i749[3], i749[4], i749[5])
  i748.colorSelected = new pc.Color(i749[6], i749[7], i749[8], i749[9])
  return i748
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'nameLabel')
  request.r(i751[2], i751[3], 0, i750, 'valueLabel')
  request.r(i751[4], i751[5], 0, i750, 'progressBarRect')
  i750.colorDefault = new pc.Color(i751[6], i751[7], i751[8], i751[9])
  i750.colorSelected = new pc.Color(i751[10], i751[11], i751[12], i751[13])
  return i750
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'nameLabel')
  request.r(i753[2], i753[3], 0, i752, 'valueLabel')
  i752.colorDefault = new pc.Color(i753[4], i753[5], i753[6], i753[7])
  i752.colorSelected = new pc.Color(i753[8], i753[9], i753[10], i753[11])
  return i752
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'nameLabel')
  request.r(i755[2], i755[3], 0, i754, 'valueLabel')
  i754.colorDefault = new pc.Color(i755[4], i755[5], i755[6], i755[7])
  i754.colorSelected = new pc.Color(i755[8], i755[9], i755[10], i755[11])
  return i754
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'nextButtonText')
  request.r(i757[2], i757[3], 0, i756, 'previousButtonText')
  request.r(i757[4], i757[5], 0, i756, 'nameLabel')
  request.r(i757[6], i757[7], 0, i756, 'valueLabel')
  i756.colorDefault = new pc.Color(i757[8], i757[9], i757[10], i757[11])
  i756.colorSelected = new pc.Color(i757[12], i757[13], i757[14], i757[15])
  return i756
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'nextButtonText')
  request.r(i759[2], i759[3], 0, i758, 'previousButtonText')
  request.r(i759[4], i759[5], 0, i758, 'nameLabel')
  request.r(i759[6], i759[7], 0, i758, 'valueLabel')
  i758.colorDefault = new pc.Color(i759[8], i759[9], i759[10], i759[11])
  i758.colorSelected = new pc.Color(i759[12], i759[13], i759[14], i759[15])
  return i758
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'panel')
  request.r(i761[2], i761[3], 0, i760, 'valuePrefab')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i763 = data
  i762.AdditionalLightsPerObjectLimit = i763[0]
  i762.AdditionalLightsRenderingMode = i763[1]
  i762.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i763[2], i762.LightRenderingMode)
  i762.ColorGradingLutSize = i763[3]
  i762.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i763[4], i762.ColorGradingMode)
  i762.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i763[5], i762.MainLightRenderingMode)
  i762.MainLightRenderingModeValue = i763[6]
  i762.SupportsMainLightShadows = !!i763[7]
  i762.MixedLightingSupported = !!i763[8]
  i762.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i763[9], i762.MsaaQuality)
  i762.MSAA = i763[10]
  i762.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i763[11], i762.OpaqueDownsampling)
  i762.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i763[12], i762.MainLightShadowmapResolution)
  i762.MainLightShadowmapResolutionValue = i763[13]
  i762.SupportsSoftShadows = !!i763[14]
  i762.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i763[15], i762.SoftShadowQuality)
  i762.SoftShadowQualityValue = i763[16]
  i762.ShadowDistance = i763[17]
  i762.ShadowCascadeCount = i763[18]
  i762.Cascade2Split = i763[19]
  i762.Cascade3Split = new pc.Vec2( i763[20], i763[21] )
  i762.Cascade4Split = new pc.Vec3( i763[22], i763[23], i763[24] )
  i762.CascadeBorder = i763[25]
  i762.ShadowDepthBias = i763[26]
  i762.ShadowNormalBias = i763[27]
  i762.RenderScale = i763[28]
  i762.RequireDepthTexture = !!i763[29]
  i762.RequireOpaqueTexture = !!i763[30]
  i762.SupportsHDR = !!i763[31]
  i762.SupportsTerrainHoles = !!i763[32]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i765 = data
  i764.Disabled = i765[0]
  i764.PerVertex = i765[1]
  i764.PerPixel = i765[2]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i767 = data
  i766.LowDynamicRange = i767[0]
  i766.HighDynamicRange = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i769 = data
  i768.Disabled = i769[0]
  i768._2x = i769[1]
  i768._4x = i769[2]
  i768._8x = i769[3]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i771 = data
  i770.None = i771[0]
  i770._2xBilinear = i771[1]
  i770._4xBox = i771[2]
  i770._4xBilinear = i771[3]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i773 = data
  i772._256 = i773[0]
  i772._512 = i773[1]
  i772._1024 = i773[2]
  i772._2048 = i773[3]
  i772._4096 = i773[4]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i775 = data
  i774.UsePipelineSettings = i775[0]
  i774.Low = i775[1]
  i774.Medium = i775[2]
  i774.High = i775[3]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i777 = data
  var i779 = i777[0]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i779[i + 0]));
  }
  i776.ShaderCompilationErrors = i778
  i776.name = i777[1]
  i776.guid = i777[2]
  var i781 = i777[3]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i776.shaderDefinedKeywords = i780
  var i783 = i777[4]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i783[i + 0]) );
  }
  i776.passes = i782
  var i785 = i777[5]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i785[i + 0]) );
  }
  i776.usePasses = i784
  var i787 = i777[6]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i787[i + 0]) );
  }
  i776.defaultParameterValues = i786
  request.r(i777[7], i777[8], 0, i776, 'unityFallbackShader')
  i776.readDepth = !!i777[9]
  i776.isCreatedByShaderGraph = !!i777[10]
  i776.compiled = !!i777[11]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i791 = data
  i790.shaderName = i791[0]
  i790.errorMessage = i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i796 = root || new pc.UnityShaderPass()
  var i797 = data
  i796.id = i797[0]
  i796.subShaderIndex = i797[1]
  i796.name = i797[2]
  i796.passType = i797[3]
  i796.grabPassTextureName = i797[4]
  i796.usePass = !!i797[5]
  i796.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[6], i796.zTest)
  i796.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[7], i796.zWrite)
  i796.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[8], i796.culling)
  i796.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i797[9], i796.blending)
  i796.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i797[10], i796.alphaBlending)
  i796.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[11], i796.colorWriteMask)
  i796.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[12], i796.offsetUnits)
  i796.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[13], i796.offsetFactor)
  i796.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[14], i796.stencilRef)
  i796.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[15], i796.stencilReadMask)
  i796.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[16], i796.stencilWriteMask)
  i796.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i797[17], i796.stencilOp)
  i796.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i797[18], i796.stencilOpFront)
  i796.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i797[19], i796.stencilOpBack)
  var i799 = i797[20]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i799[i + 0]) );
  }
  i796.tags = i798
  var i801 = i797[21]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( i801[i + 0] );
  }
  i796.passDefinedKeywords = i800
  var i803 = i797[22]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i803[i + 0]) );
  }
  i796.passDefinedKeywordGroups = i802
  var i805 = i797[23]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i805[i + 0]) );
  }
  i796.variants = i804
  var i807 = i797[24]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i807[i + 0]) );
  }
  i796.excludedVariants = i806
  i796.hasDepthReader = !!i797[25]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i809 = data
  i808.val = i809[0]
  i808.name = i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i811 = data
  i810.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[0], i810.src)
  i810.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[1], i810.dst)
  i810.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[2], i810.op)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i813 = data
  i812.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[0], i812.pass)
  i812.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[1], i812.fail)
  i812.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[2], i812.zFail)
  i812.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[3], i812.comp)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i817 = data
  i816.name = i817[0]
  i816.value = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i821 = data
  var i823 = i821[0]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i820.keywords = i822
  i820.hasDiscard = !!i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i827 = data
  i826.passId = i827[0]
  i826.subShaderIndex = i827[1]
  var i829 = i827[2]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( i829[i + 0] );
  }
  i826.keywords = i828
  i826.vertexProgram = i827[3]
  i826.fragmentProgram = i827[4]
  i826.exportedForWebGl2 = !!i827[5]
  i826.readDepth = !!i827[6]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'shader')
  i832.pass = i833[2]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i837 = data
  i836.name = i837[0]
  i836.type = i837[1]
  i836.value = new pc.Vec4( i837[2], i837[3], i837[4], i837[5] )
  i836.textureValue = i837[6]
  i836.shaderPropertyFlag = i837[7]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i839 = data
  i838.name = i839[0]
  request.r(i839[1], i839[2], 0, i838, 'texture')
  i838.aabb = i839[3]
  i838.vertices = i839[4]
  i838.triangles = i839[5]
  i838.textureRect = UnityEngine.Rect.MinMaxRect(i839[6], i839[7], i839[8], i839[9])
  i838.packedRect = UnityEngine.Rect.MinMaxRect(i839[10], i839[11], i839[12], i839[13])
  i838.border = new pc.Vec4( i839[14], i839[15], i839[16], i839[17] )
  i838.transparency = i839[18]
  i838.bounds = i839[19]
  i838.pixelsPerUnit = i839[20]
  i838.textureWidth = i839[21]
  i838.textureHeight = i839[22]
  i838.nativeSize = new pc.Vec2( i839[23], i839[24] )
  i838.pivot = new pc.Vec2( i839[25], i839[26] )
  i838.textureRectOffset = new pc.Vec2( i839[27], i839[28] )
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i841 = data
  i840.name = i841[0]
  i840.ascent = i841[1]
  i840.originalLineHeight = i841[2]
  i840.fontSize = i841[3]
  var i843 = i841[4]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i843[i + 0]) );
  }
  i840.characterInfo = i842
  request.r(i841[5], i841[6], 0, i840, 'texture')
  i840.originalFontSize = i841[7]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i847 = data
  i846.index = i847[0]
  i846.advance = i847[1]
  i846.bearing = i847[2]
  i846.glyphWidth = i847[3]
  i846.glyphHeight = i847[4]
  i846.minX = i847[5]
  i846.maxX = i847[6]
  i846.minY = i847[7]
  i846.maxY = i847[8]
  i846.uvBottomLeftX = i847[9]
  i846.uvBottomLeftY = i847[10]
  i846.uvBottomRightX = i847[11]
  i846.uvBottomRightY = i847[12]
  i846.uvTopLeftX = i847[13]
  i846.uvTopLeftY = i847[14]
  i846.uvTopRightX = i847[15]
  i846.uvTopRightY = i847[16]
  return i846
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i849 = data
  var i851 = i849[0]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 1, i850, '')
  }
  i848.components = i850
  return i848
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i855 = data
  i854.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i855[0], i854.mode)
  i854.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i855[1], i854.neutralHDRRangeReductionMode)
  i854.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i855[2], i854.acesPreset)
  i854.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i855[3], i854.hueShiftAmount)
  i854.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i855[4], i854.detectPaperWhite)
  i854.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i855[5], i854.paperWhite)
  i854.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i855[6], i854.detectBrightnessLimits)
  i854.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i855[7], i854.minNits)
  i854.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i855[8], i854.maxNits)
  i854.active = !!i855[9]
  return i854
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i857 = data
  i856.m_Value = i857[0]
  i856.m_OverrideState = !!i857[1]
  return i856
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i859 = data
  i858.m_Value = i859[0]
  i858.m_OverrideState = !!i859[1]
  return i858
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i861 = data
  i860.m_Value = i861[0]
  i860.m_OverrideState = !!i861[1]
  return i860
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i863 = data
  i862.m_Value = i863[0]
  i862.m_OverrideState = !!i863[1]
  return i862
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i865 = data
  i864.m_Value = !!i865[0]
  i864.m_OverrideState = !!i865[1]
  return i864
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i867 = data
  i866.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i867[0], i866.skipIterations)
  i866.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i867[1], i866.threshold)
  i866.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i867[2], i866.intensity)
  i866.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i867[3], i866.scatter)
  i866.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i867[4], i866.clamp)
  i866.tint = request.d('UnityEngine.Rendering.ColorParameter', i867[5], i866.tint)
  i866.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i867[6], i866.highQualityFiltering)
  i866.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i867[7], i866.downscale)
  i866.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i867[8], i866.maxIterations)
  i866.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i867[9], i866.dirtTexture)
  i866.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i867[10], i866.dirtIntensity)
  i866.active = !!i867[11]
  return i866
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i869 = data
  i868.m_Value = i869[0]
  i868.m_OverrideState = !!i869[1]
  return i868
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i871 = data
  i870.m_Value = i871[0]
  i870.m_OverrideState = !!i871[1]
  return i870
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i873 = data
  i872.m_Value = new pc.Color(i873[0], i873[1], i873[2], i873[3])
  i872.m_OverrideState = !!i873[4]
  return i872
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i875 = data
  i874.m_Value = i875[0]
  i874.m_OverrideState = !!i875[1]
  return i874
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i877 = data
  i876.dimension = i877[0]
  request.r(i877[1], i877[2], 0, i876, 'm_Value')
  i876.m_OverrideState = !!i877[3]
  return i876
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i879 = data
  i878.color = request.d('UnityEngine.Rendering.ColorParameter', i879[0], i878.color)
  i878.center = request.d('UnityEngine.Rendering.Vector2Parameter', i879[1], i878.center)
  i878.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i879[2], i878.intensity)
  i878.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i879[3], i878.smoothness)
  i878.rounded = request.d('UnityEngine.Rendering.BoolParameter', i879[4], i878.rounded)
  i878.active = !!i879[5]
  return i878
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i881 = data
  i880.m_Value = new pc.Vec2( i881[0], i881[1] )
  i880.m_OverrideState = !!i881[2]
  return i880
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i882 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i883 = data
  i882.useSafeMode = !!i883[0]
  i882.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i883[1], i882.safeModeOptions)
  i882.timeScale = i883[2]
  i882.unscaledTimeScale = i883[3]
  i882.useSmoothDeltaTime = !!i883[4]
  i882.maxSmoothUnscaledTime = i883[5]
  i882.rewindCallbackMode = i883[6]
  i882.showUnityEditorReport = !!i883[7]
  i882.logBehaviour = i883[8]
  i882.drawGizmos = !!i883[9]
  i882.defaultRecyclable = !!i883[10]
  i882.defaultAutoPlay = i883[11]
  i882.defaultUpdateType = i883[12]
  i882.defaultTimeScaleIndependent = !!i883[13]
  i882.defaultEaseType = i883[14]
  i882.defaultEaseOvershootOrAmplitude = i883[15]
  i882.defaultEasePeriod = i883[16]
  i882.defaultAutoKill = !!i883[17]
  i882.defaultLoopType = i883[18]
  i882.debugMode = !!i883[19]
  i882.debugStoreTargetId = !!i883[20]
  i882.showPreviewPanel = !!i883[21]
  i882.storeSettingsLocation = i883[22]
  i882.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i883[23], i882.modules)
  i882.createASMDEF = !!i883[24]
  i882.showPlayingTweens = !!i883[25]
  i882.showPausedTweens = !!i883[26]
  return i882
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i884 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i885 = data
  i884.logBehaviour = i885[0]
  i884.nestedTweenFailureBehaviour = i885[1]
  return i884
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i886 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i887 = data
  i886.showPanel = !!i887[0]
  i886.audioEnabled = !!i887[1]
  i886.physicsEnabled = !!i887[2]
  i886.physics2DEnabled = !!i887[3]
  i886.spriteEnabled = !!i887[4]
  i886.uiEnabled = !!i887[5]
  i886.textMeshProEnabled = !!i887[6]
  i886.tk2DEnabled = !!i887[7]
  i886.deAudioEnabled = !!i887[8]
  i886.deUnityExtendedEnabled = !!i887[9]
  i886.epoOutlineEnabled = !!i887[10]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i889 = data
  var i891 = i889[0]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i891[i + 0]) );
  }
  i888.files = i890
  i888.componentToPrefabIds = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i895 = data
  i894.path = i895[0]
  request.r(i895[1], i895[2], 0, i894, 'unityObject')
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i897 = data
  var i899 = i897[0]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i899[i + 0]) );
  }
  i896.scriptsExecutionOrder = i898
  var i901 = i897[1]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i901[i + 0]) );
  }
  i896.sortingLayers = i900
  var i903 = i897[2]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i903[i + 0]) );
  }
  i896.cullingLayers = i902
  i896.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i897[3], i896.timeSettings)
  i896.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i897[4], i896.physicsSettings)
  i896.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i897[5], i896.physics2DSettings)
  i896.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i897[6], i896.qualitySettings)
  i896.enableRealtimeShadows = !!i897[7]
  i896.enableAutoInstancing = !!i897[8]
  i896.enableDynamicBatching = !!i897[9]
  i896.lightmapEncodingQuality = i897[10]
  i896.desiredColorSpace = i897[11]
  var i905 = i897[12]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( i905[i + 0] );
  }
  i896.allTags = i904
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i909 = data
  i908.name = i909[0]
  i908.value = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i913 = data
  i912.id = i913[0]
  i912.name = i913[1]
  i912.value = i913[2]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i917 = data
  i916.id = i917[0]
  i916.name = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i919 = data
  i918.fixedDeltaTime = i919[0]
  i918.maximumDeltaTime = i919[1]
  i918.timeScale = i919[2]
  i918.maximumParticleTimestep = i919[3]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i921 = data
  i920.gravity = new pc.Vec3( i921[0], i921[1], i921[2] )
  i920.defaultSolverIterations = i921[3]
  i920.bounceThreshold = i921[4]
  i920.autoSyncTransforms = !!i921[5]
  i920.autoSimulation = !!i921[6]
  var i923 = i921[7]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i923[i + 0]) );
  }
  i920.collisionMatrix = i922
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i927 = data
  i926.enabled = !!i927[0]
  i926.layerId = i927[1]
  i926.otherLayerId = i927[2]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'material')
  i928.gravity = new pc.Vec2( i929[2], i929[3] )
  i928.positionIterations = i929[4]
  i928.velocityIterations = i929[5]
  i928.velocityThreshold = i929[6]
  i928.maxLinearCorrection = i929[7]
  i928.maxAngularCorrection = i929[8]
  i928.maxTranslationSpeed = i929[9]
  i928.maxRotationSpeed = i929[10]
  i928.baumgarteScale = i929[11]
  i928.baumgarteTOIScale = i929[12]
  i928.timeToSleep = i929[13]
  i928.linearSleepTolerance = i929[14]
  i928.angularSleepTolerance = i929[15]
  i928.defaultContactOffset = i929[16]
  i928.autoSimulation = !!i929[17]
  i928.queriesHitTriggers = !!i929[18]
  i928.queriesStartInColliders = !!i929[19]
  i928.callbacksOnDisable = !!i929[20]
  i928.reuseCollisionCallbacks = !!i929[21]
  i928.autoSyncTransforms = !!i929[22]
  var i931 = i929[23]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i931[i + 0]) );
  }
  i928.collisionMatrix = i930
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i935 = data
  i934.enabled = !!i935[0]
  i934.layerId = i935[1]
  i934.otherLayerId = i935[2]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i939[i + 0]) );
  }
  i936.qualityLevels = i938
  var i941 = i937[1]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i936.names = i940
  i936.shadows = i937[2]
  i936.anisotropicFiltering = i937[3]
  i936.antiAliasing = i937[4]
  i936.lodBias = i937[5]
  i936.shadowCascades = i937[6]
  i936.shadowDistance = i937[7]
  i936.shadowmaskMode = i937[8]
  i936.shadowProjection = i937[9]
  i936.shadowResolution = i937[10]
  i936.softParticles = !!i937[11]
  i936.softVegetation = !!i937[12]
  i936.activeColorSpace = i937[13]
  i936.desiredColorSpace = i937[14]
  i936.masterTextureLimit = i937[15]
  i936.maxQueuedFrames = i937[16]
  i936.particleRaycastBudget = i937[17]
  i936.pixelLightCount = i937[18]
  i936.realtimeReflectionProbes = !!i937[19]
  i936.shadowCascade2Split = i937[20]
  i936.shadowCascade4Split = new pc.Vec3( i937[21], i937[22], i937[23] )
  i936.streamingMipmapsActive = !!i937[24]
  i936.vSyncCount = i937[25]
  i936.asyncUploadBufferSize = i937[26]
  i936.asyncUploadTimeSlice = i937[27]
  i936.billboardsFaceCameraPosition = !!i937[28]
  i936.shadowNearPlaneOffset = i937[29]
  i936.streamingMipmapsMemoryBudget = i937[30]
  i936.maximumLODLevel = i937[31]
  i936.streamingMipmapsAddAllCameras = !!i937[32]
  i936.streamingMipmapsMaxLevelReduction = i937[33]
  i936.streamingMipmapsRenderersPerFrame = i937[34]
  i936.resolutionScalingFixedDPIFactor = i937[35]
  i936.streamingMipmapsMaxFileIORequests = i937[36]
  i936.currentQualityLevel = i937[37]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i947 = data
  i946.weight = i947[0]
  i946.vertices = i947[1]
  i946.normals = i947[2]
  i946.tangents = i947[3]
  return i946
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[85],"86":[8],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[96],"97":[96],"98":[96],"99":[96],"100":[96],"101":[96],"102":[96],"103":[96],"104":[96],"105":[96],"106":[96],"107":[96],"108":[96],"109":[8],"110":[3],"111":[112],"113":[112],"20":[19],"114":[23,115,19],"51":[19],"116":[8],"11":[8],"13":[12],"117":[118],"119":[19],"120":[19],"22":[20],"24":[23,19],"121":[19],"21":[20],"31":[19],"122":[19],"58":[19],"123":[19],"36":[19],"124":[19],"30":[19],"40":[19],"125":[19],"126":[23,19],"127":[19],"39":[19],"35":[19],"128":[19],"34":[23,19],"44":[19],"129":[17],"130":[17],"18":[17],"131":[17],"132":[8],"133":[8],"134":[118],"135":[19],"136":[3,19],"137":[19,23],"138":[19],"139":[23,19],"140":[3],"141":[23,19],"142":[19],"143":[118]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","GameManager","UnityEngine.GameObject","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 19:41:10";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Subject-Test-Build";

Deserializers.lunaAppID = "31170";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1930";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3198";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "7297cee8-2886-4f0d-a189-478c90977a9b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

