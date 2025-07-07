var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointSpring' )
  var i545 = data
  i544.spring = i545[0]
  i544.damper = i545[1]
  i544.targetPosition = i545[2]
  return i544
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointMotor' )
  var i547 = data
  i546.m_TargetVelocity = i547[0]
  i546.m_Force = i547[1]
  i546.m_FreeSpin = i547[2]
  return i546
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointLimits' )
  var i549 = data
  i548.m_Min = i549[0]
  i548.m_Max = i549[1]
  i548.m_Bounciness = i549[2]
  i548.m_BounceMinVelocity = i549[3]
  i548.m_ContactDistance = i549[4]
  i548.minBounce = i549[5]
  i548.maxBounce = i549[6]
  return i548
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointDrive' )
  var i551 = data
  i550.m_PositionSpring = i551[0]
  i550.m_PositionDamper = i551[1]
  i550.m_MaximumForce = i551[2]
  i550.m_UseAcceleration = i551[3]
  return i550
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i553 = data
  i552.m_Spring = i553[0]
  i552.m_Damper = i553[1]
  return i552
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i555 = data
  i554.m_Limit = i555[0]
  i554.m_Bounciness = i555[1]
  i554.m_ContactDistance = i555[2]
  return i554
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i557 = data
  i556.m_ExtremumSlip = i557[0]
  i556.m_ExtremumValue = i557[1]
  i556.m_AsymptoteSlip = i557[2]
  i556.m_AsymptoteValue = i557[3]
  i556.m_Stiffness = i557[4]
  return i556
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i559 = data
  i558.m_LowerAngle = i559[0]
  i558.m_UpperAngle = i559[1]
  return i558
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i561 = data
  i560.m_MotorSpeed = i561[0]
  i560.m_MaximumMotorTorque = i561[1]
  return i560
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i563 = data
  i562.m_DampingRatio = i563[0]
  i562.m_Frequency = i563[1]
  i562.m_Angle = i563[2]
  return i562
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i565 = data
  i564.m_LowerTranslation = i565[0]
  i564.m_UpperTranslation = i565[1]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i566 = root || new pc.UnityMaterial()
  var i567 = data
  i566.name = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'shader')
  i566.renderQueue = i567[3]
  i566.enableInstancing = !!i567[4]
  var i569 = i567[5]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i569[i + 0]) );
  }
  i566.floatParameters = i568
  var i571 = i567[6]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i571[i + 0]) );
  }
  i566.colorParameters = i570
  var i573 = i567[7]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i573[i + 0]) );
  }
  i566.vectorParameters = i572
  var i575 = i567[8]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i575[i + 0]) );
  }
  i566.textureParameters = i574
  var i577 = i567[9]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i577[i + 0]) );
  }
  i566.materialFlags = i576
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i581 = data
  i580.name = i581[0]
  i580.value = i581[1]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i585 = data
  i584.name = i585[0]
  i584.value = new pc.Color(i585[1], i585[2], i585[3], i585[4])
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i589 = data
  i588.name = i589[0]
  i588.value = new pc.Vec4( i589[1], i589[2], i589[3], i589[4] )
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i593 = data
  i592.name = i593[0]
  request.r(i593[1], i593[2], 0, i592, 'value')
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i597 = data
  i596.name = i597[0]
  i596.enabled = !!i597[1]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i599 = data
  i598.name = i599[0]
  i598.width = i599[1]
  i598.height = i599[2]
  i598.mipmapCount = i599[3]
  i598.anisoLevel = i599[4]
  i598.filterMode = i599[5]
  i598.hdr = !!i599[6]
  i598.format = i599[7]
  i598.wrapMode = i599[8]
  i598.alphaIsTransparency = !!i599[9]
  i598.alphaSource = i599[10]
  i598.graphicsFormat = i599[11]
  i598.sRGBTexture = !!i599[12]
  i598.desiredColorSpace = i599[13]
  i598.wrapU = i599[14]
  i598.wrapV = i599[15]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i601 = data
  i600.name = i601[0]
  i600.atlasId = i601[1]
  i600.mipmapCount = i601[2]
  i600.hdr = !!i601[3]
  i600.size = i601[4]
  i600.anisoLevel = i601[5]
  i600.filterMode = i601[6]
  var i603 = i601[7]
  var i602 = []
  for(var i = 0; i < i603.length; i += 4) {
    i602.push( UnityEngine.Rect.MinMaxRect(i603[i + 0], i603[i + 1], i603[i + 2], i603[i + 3]) );
  }
  i600.rects = i602
  i600.wrapU = i601[8]
  i600.wrapV = i601[9]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i607 = data
  i606.name = i607[0]
  i606.index = i607[1]
  i606.startup = !!i607[2]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i609 = data
  i608.position = new pc.Vec3( i609[0], i609[1], i609[2] )
  i608.scale = new pc.Vec3( i609[3], i609[4], i609[5] )
  i608.rotation = new pc.Quat(i609[6], i609[7], i609[8], i609[9])
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i611 = data
  i610.enabled = !!i611[0]
  i610.aspect = i611[1]
  i610.orthographic = !!i611[2]
  i610.orthographicSize = i611[3]
  i610.backgroundColor = new pc.Color(i611[4], i611[5], i611[6], i611[7])
  i610.nearClipPlane = i611[8]
  i610.farClipPlane = i611[9]
  i610.fieldOfView = i611[10]
  i610.depth = i611[11]
  i610.clearFlags = i611[12]
  i610.cullingMask = i611[13]
  i610.rect = i611[14]
  request.r(i611[15], i611[16], 0, i610, 'targetTexture')
  i610.usePhysicalProperties = !!i611[17]
  i610.focalLength = i611[18]
  i610.sensorSize = new pc.Vec2( i611[19], i611[20] )
  i610.lensShift = new pc.Vec2( i611[21], i611[22] )
  i610.gateFit = i611[23]
  i610.commandBufferCount = i611[24]
  i610.cameraType = i611[25]
  return i610
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i613 = data
  i612.m_RenderShadows = !!i613[0]
  i612.m_RequiresDepthTextureOption = i613[1]
  i612.m_RequiresOpaqueTextureOption = i613[2]
  i612.m_CameraType = i613[3]
  var i615 = i613[4]
  var i614 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 1, i614, '')
  }
  i612.m_Cameras = i614
  i612.m_RendererIndex = i613[5]
  i612.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i613[6] )
  request.r(i613[7], i613[8], 0, i612, 'm_VolumeTrigger')
  i612.m_VolumeFrameworkUpdateModeOption = i613[9]
  i612.m_RenderPostProcessing = !!i613[10]
  i612.m_Antialiasing = i613[11]
  i612.m_AntialiasingQuality = i613[12]
  i612.m_StopNaN = !!i613[13]
  i612.m_Dithering = !!i613[14]
  i612.m_ClearDepth = !!i613[15]
  i612.m_AllowXRRendering = !!i613[16]
  i612.m_AllowHDROutput = !!i613[17]
  i612.m_UseScreenCoordOverride = !!i613[18]
  i612.m_ScreenSizeOverride = new pc.Vec4( i613[19], i613[20], i613[21], i613[22] )
  i612.m_ScreenCoordScaleBias = new pc.Vec4( i613[23], i613[24], i613[25], i613[26] )
  i612.m_RequiresDepthTexture = !!i613[27]
  i612.m_RequiresColorTexture = !!i613[28]
  i612.m_Version = i613[29]
  i612.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i613[30], i612.m_TaaSettings)
  return i612
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i619 = data
  i618.m_Quality = i619[0]
  i618.m_FrameInfluence = i619[1]
  i618.m_JitterScale = i619[2]
  i618.m_MipBias = i619[3]
  i618.m_VarianceClampScale = i619[4]
  i618.m_ContrastAdaptiveSharpening = i619[5]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i621 = data
  i620.name = i621[0]
  i620.tagId = i621[1]
  i620.enabled = !!i621[2]
  i620.isStatic = !!i621[3]
  i620.layer = i621[4]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i623 = data
  i622.enabled = !!i623[0]
  i622.type = i623[1]
  i622.color = new pc.Color(i623[2], i623[3], i623[4], i623[5])
  i622.cullingMask = i623[6]
  i622.intensity = i623[7]
  i622.range = i623[8]
  i622.spotAngle = i623[9]
  i622.shadows = i623[10]
  i622.shadowNormalBias = i623[11]
  i622.shadowBias = i623[12]
  i622.shadowStrength = i623[13]
  i622.shadowResolution = i623[14]
  i622.lightmapBakeType = i623[15]
  i622.renderMode = i623[16]
  request.r(i623[17], i623[18], 0, i622, 'cookie')
  i622.cookieSize = i623[19]
  return i622
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i625 = data
  i624.m_Version = i625[0]
  i624.m_UsePipelineSettings = !!i625[1]
  i624.m_AdditionalLightsShadowResolutionTier = i625[2]
  i624.m_LightLayerMask = i625[3]
  i624.m_RenderingLayers = i625[4]
  i624.m_CustomShadowLayers = !!i625[5]
  i624.m_ShadowLayerMask = i625[6]
  i624.m_ShadowRenderingLayers = i625[7]
  i624.m_LightCookieSize = new pc.Vec2( i625[8], i625[9] )
  i624.m_LightCookieOffset = new pc.Vec2( i625[10], i625[11] )
  i624.m_SoftShadowQuality = i625[12]
  return i624
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i627 = data
  i626.priority = i627[0]
  i626.blendDistance = i627[1]
  i626.weight = i627[2]
  request.r(i627[3], i627[4], 0, i626, 'sharedProfile')
  i626.m_IsGlobal = !!i627[5]
  return i626
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_FirstSelected')
  i628.m_sendNavigationEvents = !!i629[2]
  i628.m_DragThreshold = i629[3]
  return i628
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i631 = data
  i630.m_HorizontalAxis = i631[0]
  i630.m_VerticalAxis = i631[1]
  i630.m_SubmitButton = i631[2]
  i630.m_CancelButton = i631[3]
  i630.m_InputActionsPerSecond = i631[4]
  i630.m_RepeatDelay = i631[5]
  i630.m_ForceModuleActive = !!i631[6]
  i630.m_SendPointerHoverToParent = !!i631[7]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i633 = data
  i632.ambientIntensity = i633[0]
  i632.reflectionIntensity = i633[1]
  i632.ambientMode = i633[2]
  i632.ambientLight = new pc.Color(i633[3], i633[4], i633[5], i633[6])
  i632.ambientSkyColor = new pc.Color(i633[7], i633[8], i633[9], i633[10])
  i632.ambientGroundColor = new pc.Color(i633[11], i633[12], i633[13], i633[14])
  i632.ambientEquatorColor = new pc.Color(i633[15], i633[16], i633[17], i633[18])
  i632.fogColor = new pc.Color(i633[19], i633[20], i633[21], i633[22])
  i632.fogEndDistance = i633[23]
  i632.fogStartDistance = i633[24]
  i632.fogDensity = i633[25]
  i632.fog = !!i633[26]
  request.r(i633[27], i633[28], 0, i632, 'skybox')
  i632.fogMode = i633[29]
  var i635 = i633[30]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i635[i + 0]) );
  }
  i632.lightmaps = i634
  i632.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i633[31], i632.lightProbes)
  i632.lightmapsMode = i633[32]
  i632.mixedBakeMode = i633[33]
  i632.environmentLightingMode = i633[34]
  i632.ambientProbe = new pc.SphericalHarmonicsL2(i633[35])
  i632.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i633[36])
  i632.useReferenceAmbientProbe = !!i633[37]
  request.r(i633[38], i633[39], 0, i632, 'customReflection')
  request.r(i633[40], i633[41], 0, i632, 'defaultReflection')
  i632.defaultReflectionMode = i633[42]
  i632.defaultReflectionResolution = i633[43]
  i632.sunLightObjectId = i633[44]
  i632.pixelLightCount = i633[45]
  i632.defaultReflectionHDR = !!i633[46]
  i632.hasLightDataAsset = !!i633[47]
  i632.hasManualGenerate = !!i633[48]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'lightmapColor')
  request.r(i639[2], i639[3], 0, i638, 'lightmapDirection')
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i640 = root || new UnityEngine.LightProbes()
  var i641 = data
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i649 = data
  i648.pivot = new pc.Vec2( i649[0], i649[1] )
  i648.anchorMin = new pc.Vec2( i649[2], i649[3] )
  i648.anchorMax = new pc.Vec2( i649[4], i649[5] )
  i648.sizeDelta = new pc.Vec2( i649[6], i649[7] )
  i648.anchoredPosition3D = new pc.Vec3( i649[8], i649[9], i649[10] )
  i648.rotation = new pc.Quat(i649[11], i649[12], i649[13], i649[14])
  i648.scale = new pc.Vec3( i649[15], i649[16], i649[17] )
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i651 = data
  i650.enabled = !!i651[0]
  i650.planeDistance = i651[1]
  i650.referencePixelsPerUnit = i651[2]
  i650.isFallbackOverlay = !!i651[3]
  i650.renderMode = i651[4]
  i650.renderOrder = i651[5]
  i650.sortingLayerName = i651[6]
  i650.sortingOrder = i651[7]
  i650.scaleFactor = i651[8]
  request.r(i651[9], i651[10], 0, i650, 'worldCamera')
  i650.overrideSorting = !!i651[11]
  i650.pixelPerfect = !!i651[12]
  i650.targetDisplay = i651[13]
  i650.overridePixelPerfect = !!i651[14]
  return i650
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i653 = data
  i652.m_UiScaleMode = i653[0]
  i652.m_ReferencePixelsPerUnit = i653[1]
  i652.m_ScaleFactor = i653[2]
  i652.m_ReferenceResolution = new pc.Vec2( i653[3], i653[4] )
  i652.m_ScreenMatchMode = i653[5]
  i652.m_MatchWidthOrHeight = i653[6]
  i652.m_PhysicalUnit = i653[7]
  i652.m_FallbackScreenDPI = i653[8]
  i652.m_DefaultSpriteDPI = i653[9]
  i652.m_DynamicPixelsPerUnit = i653[10]
  i652.m_PresetInfoIsWorld = !!i653[11]
  return i652
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i655 = data
  i654.m_IgnoreReversedGraphics = !!i655[0]
  i654.m_BlockingObjects = i655[1]
  i654.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i655[2] )
  return i654
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'panelPrefab')
  var i659 = i657[2]
  var i658 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i659.length; i += 1) {
    i658.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i659[i + 0]));
  }
  i656.prefabs = i658
  return i656
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i663 = data
  i662.type = i663[0]
  request.r(i663[1], i663[2], 0, i662, 'prefab')
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i665 = data
  i664.cullTransparentMesh = !!i665[0]
  return i664
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.Image' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_Sprite')
  i666.m_Type = i667[2]
  i666.m_PreserveAspect = !!i667[3]
  i666.m_FillCenter = !!i667[4]
  i666.m_FillMethod = i667[5]
  i666.m_FillAmount = i667[6]
  i666.m_FillClockwise = !!i667[7]
  i666.m_FillOrigin = i667[8]
  i666.m_UseSpriteMesh = !!i667[9]
  i666.m_PixelsPerUnitMultiplier = i667[10]
  request.r(i667[11], i667[12], 0, i666, 'm_Material')
  i666.m_Maskable = !!i667[13]
  i666.m_Color = new pc.Color(i667[14], i667[15], i667[16], i667[17])
  i666.m_RaycastTarget = !!i667[18]
  i666.m_RaycastPadding = new pc.Vec4( i667[19], i667[20], i667[21], i667[22] )
  return i666
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i669 = data
  i668.m_Spacing = i669[0]
  i668.m_ChildForceExpandWidth = !!i669[1]
  i668.m_ChildForceExpandHeight = !!i669[2]
  i668.m_ChildControlWidth = !!i669[3]
  i668.m_ChildControlHeight = !!i669[4]
  i668.m_ChildScaleWidth = !!i669[5]
  i668.m_ChildScaleHeight = !!i669[6]
  i668.m_ReverseArrangement = !!i669[7]
  i668.m_Padding = UnityEngine.RectOffset.FromPaddings(i669[8], i669[9], i669[10], i669[11])
  i668.m_ChildAlignment = i669[12]
  return i668
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i671 = data
  i670.m_HorizontalFit = i671[0]
  i670.m_VerticalFit = i671[1]
  return i670
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'contentHolder')
  return i672
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'nameLabel')
  request.r(i675[2], i675[3], 0, i674, 'scrollRect')
  request.r(i675[4], i675[5], 0, i674, 'viewport')
  request.r(i675[6], i675[7], 0, i674, 'Canvas')
  return i674
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i677 = data
  i676.m_IgnoreLayout = !!i677[0]
  i676.m_MinWidth = i677[1]
  i676.m_MinHeight = i677[2]
  i676.m_PreferredWidth = i677[3]
  i676.m_PreferredHeight = i677[4]
  i676.m_FlexibleWidth = i677[5]
  i676.m_FlexibleHeight = i677[6]
  i676.m_LayoutPriority = i677[7]
  return i676
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.Button' )
  var i679 = data
  i678.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i679[0], i678.m_OnClick)
  i678.m_Navigation = request.d('UnityEngine.UI.Navigation', i679[1], i678.m_Navigation)
  i678.m_Transition = i679[2]
  i678.m_Colors = request.d('UnityEngine.UI.ColorBlock', i679[3], i678.m_Colors)
  i678.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i679[4], i678.m_SpriteState)
  i678.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i679[5], i678.m_AnimationTriggers)
  i678.m_Interactable = !!i679[6]
  request.r(i679[7], i679[8], 0, i678, 'm_TargetGraphic')
  return i678
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i681 = data
  i680.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i681[0], i680.m_PersistentCalls)
  return i680
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i683 = data
  var i685 = i683[0]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i685.length; i += 1) {
    i684.add(request.d('UnityEngine.Events.PersistentCall', i685[i + 0]));
  }
  i682.m_Calls = i684
  return i682
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'm_Target')
  i688.m_TargetAssemblyTypeName = i689[2]
  i688.m_MethodName = i689[3]
  i688.m_Mode = i689[4]
  i688.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i689[5], i688.m_Arguments)
  i688.m_CallState = i689[6]
  return i688
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'm_ObjectArgument')
  i690.m_ObjectArgumentAssemblyTypeName = i691[2]
  i690.m_IntArgument = i691[3]
  i690.m_FloatArgument = i691[4]
  i690.m_StringArgument = i691[5]
  i690.m_BoolArgument = !!i691[6]
  return i690
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i693 = data
  i692.m_Mode = i693[0]
  i692.m_WrapAround = !!i693[1]
  request.r(i693[2], i693[3], 0, i692, 'm_SelectOnUp')
  request.r(i693[4], i693[5], 0, i692, 'm_SelectOnDown')
  request.r(i693[6], i693[7], 0, i692, 'm_SelectOnLeft')
  request.r(i693[8], i693[9], 0, i692, 'm_SelectOnRight')
  return i692
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i695 = data
  i694.m_NormalColor = new pc.Color(i695[0], i695[1], i695[2], i695[3])
  i694.m_HighlightedColor = new pc.Color(i695[4], i695[5], i695[6], i695[7])
  i694.m_PressedColor = new pc.Color(i695[8], i695[9], i695[10], i695[11])
  i694.m_SelectedColor = new pc.Color(i695[12], i695[13], i695[14], i695[15])
  i694.m_DisabledColor = new pc.Color(i695[16], i695[17], i695[18], i695[19])
  i694.m_ColorMultiplier = i695[20]
  i694.m_FadeDuration = i695[21]
  return i694
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'm_HighlightedSprite')
  request.r(i697[2], i697[3], 0, i696, 'm_PressedSprite')
  request.r(i697[4], i697[5], 0, i696, 'm_SelectedSprite')
  request.r(i697[6], i697[7], 0, i696, 'm_DisabledSprite')
  return i696
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i699 = data
  i698.m_NormalTrigger = i699[0]
  i698.m_HighlightedTrigger = i699[1]
  i698.m_PressedTrigger = i699[2]
  i698.m_SelectedTrigger = i699[3]
  i698.m_DisabledTrigger = i699[4]
  return i698
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.Text' )
  var i701 = data
  i700.m_FontData = request.d('UnityEngine.UI.FontData', i701[0], i700.m_FontData)
  i700.m_Text = i701[1]
  request.r(i701[2], i701[3], 0, i700, 'm_Material')
  i700.m_Maskable = !!i701[4]
  i700.m_Color = new pc.Color(i701[5], i701[6], i701[7], i701[8])
  i700.m_RaycastTarget = !!i701[9]
  i700.m_RaycastPadding = new pc.Vec4( i701[10], i701[11], i701[12], i701[13] )
  return i700
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.FontData' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'm_Font')
  i702.m_FontSize = i703[2]
  i702.m_FontStyle = i703[3]
  i702.m_BestFit = !!i703[4]
  i702.m_MinSize = i703[5]
  i702.m_MaxSize = i703[6]
  i702.m_Alignment = i703[7]
  i702.m_AlignByGeometry = !!i703[8]
  i702.m_RichText = !!i703[9]
  i702.m_HorizontalOverflow = i703[10]
  i702.m_VerticalOverflow = i703[11]
  i702.m_LineSpacing = i703[12]
  return i702
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_Content')
  i704.m_Horizontal = !!i705[2]
  i704.m_Vertical = !!i705[3]
  i704.m_MovementType = i705[4]
  i704.m_Elasticity = i705[5]
  i704.m_Inertia = !!i705[6]
  i704.m_DecelerationRate = i705[7]
  i704.m_ScrollSensitivity = i705[8]
  request.r(i705[9], i705[10], 0, i704, 'm_Viewport')
  request.r(i705[11], i705[12], 0, i704, 'm_HorizontalScrollbar')
  request.r(i705[13], i705[14], 0, i704, 'm_VerticalScrollbar')
  i704.m_HorizontalScrollbarVisibility = i705[15]
  i704.m_VerticalScrollbarVisibility = i705[16]
  i704.m_HorizontalScrollbarSpacing = i705[17]
  i704.m_VerticalScrollbarSpacing = i705[18]
  i704.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i705[19], i704.m_OnValueChanged)
  return i704
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i707 = data
  i706.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i707[0], i706.m_PersistentCalls)
  return i706
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.Mask' )
  var i709 = data
  i708.m_ShowMaskGraphic = !!i709[0]
  return i708
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_HandleRect')
  i710.m_Direction = i711[2]
  i710.m_Value = i711[3]
  i710.m_Size = i711[4]
  i710.m_NumberOfSteps = i711[5]
  i710.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i711[6], i710.m_OnValueChanged)
  i710.m_Navigation = request.d('UnityEngine.UI.Navigation', i711[7], i710.m_Navigation)
  i710.m_Transition = i711[8]
  i710.m_Colors = request.d('UnityEngine.UI.ColorBlock', i711[9], i710.m_Colors)
  i710.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i711[10], i710.m_SpriteState)
  i710.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i711[11], i710.m_AnimationTriggers)
  i710.m_Interactable = !!i711[12]
  request.r(i711[13], i711[14], 0, i710, 'm_TargetGraphic')
  return i710
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i713 = data
  i712.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i713[0], i712.m_PersistentCalls)
  return i712
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i715 = data
  var i717 = i715[0]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i717[i + 0]));
  }
  i714.m_Delegates = i716
  return i714
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i721 = data
  i720.eventID = i721[0]
  i720.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i721[1], i720.callback)
  return i720
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i723 = data
  i722.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i723[0], i722.m_PersistentCalls)
  return i722
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'nameLabel')
  request.r(i725[2], i725[3], 0, i724, 'valueLabel')
  i724.colorDefault = new pc.Color(i725[4], i725[5], i725[6], i725[7])
  i724.colorSelected = new pc.Color(i725[8], i725[9], i725[10], i725[11])
  return i724
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'nameLabel')
  request.r(i727[2], i727[3], 0, i726, 'valueToggle')
  request.r(i727[4], i727[5], 0, i726, 'checkmarkImage')
  i726.colorDefault = new pc.Color(i727[6], i727[7], i727[8], i727[9])
  i726.colorSelected = new pc.Color(i727[10], i727[11], i727[12], i727[13])
  return i726
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i729 = data
  i728.toggleTransition = i729[0]
  request.r(i729[1], i729[2], 0, i728, 'graphic')
  i728.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i729[3], i728.onValueChanged)
  request.r(i729[4], i729[5], 0, i728, 'm_Group')
  i728.m_IsOn = !!i729[6]
  i728.m_Navigation = request.d('UnityEngine.UI.Navigation', i729[7], i728.m_Navigation)
  i728.m_Transition = i729[8]
  i728.m_Colors = request.d('UnityEngine.UI.ColorBlock', i729[9], i728.m_Colors)
  i728.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i729[10], i728.m_SpriteState)
  i728.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i729[11], i728.m_AnimationTriggers)
  i728.m_Interactable = !!i729[12]
  request.r(i729[13], i729[14], 0, i728, 'm_TargetGraphic')
  return i728
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i731 = data
  i730.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i731[0], i730.m_PersistentCalls)
  return i730
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'nameLabel')
  request.r(i733[2], i733[3], 0, i732, 'valueLabel')
  i732.colorDefault = new pc.Color(i733[4], i733[5], i733[6], i733[7])
  i732.colorSelected = new pc.Color(i733[8], i733[9], i733[10], i733[11])
  return i732
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'nameLabel')
  request.r(i735[2], i735[3], 0, i734, 'valueLabel')
  i734.colorDefault = new pc.Color(i735[4], i735[5], i735[6], i735[7])
  i734.colorSelected = new pc.Color(i735[8], i735[9], i735[10], i735[11])
  return i734
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'nameLabel')
  request.r(i737[2], i737[3], 0, i736, 'valueLabel')
  i736.colorDefault = new pc.Color(i737[4], i737[5], i737[6], i737[7])
  i736.colorSelected = new pc.Color(i737[8], i737[9], i737[10], i737[11])
  return i736
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'nextButtonText')
  request.r(i739[2], i739[3], 0, i738, 'previousButtonText')
  request.r(i739[4], i739[5], 0, i738, 'nameLabel')
  request.r(i739[6], i739[7], 0, i738, 'valueLabel')
  i738.colorDefault = new pc.Color(i739[8], i739[9], i739[10], i739[11])
  i738.colorSelected = new pc.Color(i739[12], i739[13], i739[14], i739[15])
  return i738
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'nameLabel')
  i740.colorDefault = new pc.Color(i741[2], i741[3], i741[4], i741[5])
  i740.colorSelected = new pc.Color(i741[6], i741[7], i741[8], i741[9])
  return i740
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'nameLabel')
  request.r(i743[2], i743[3], 0, i742, 'valueToggle')
  i742.colorDefault = new pc.Color(i743[4], i743[5], i743[6], i743[7])
  i742.colorSelected = new pc.Color(i743[8], i743[9], i743[10], i743[11])
  return i742
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i745 = data
  i744.toggleTransition = i745[0]
  request.r(i745[1], i745[2], 0, i744, 'graphic')
  i744.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i745[3], i744.onValueChanged)
  request.r(i745[4], i745[5], 0, i744, 'content')
  request.r(i745[6], i745[7], 0, i744, 'arrowOpened')
  request.r(i745[8], i745[9], 0, i744, 'arrowClosed')
  request.r(i745[10], i745[11], 0, i744, 'm_Group')
  i744.m_IsOn = !!i745[12]
  i744.m_Navigation = request.d('UnityEngine.UI.Navigation', i745[13], i744.m_Navigation)
  i744.m_Transition = i745[14]
  i744.m_Colors = request.d('UnityEngine.UI.ColorBlock', i745[15], i744.m_Colors)
  i744.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i745[16], i744.m_SpriteState)
  i744.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i745[17], i744.m_AnimationTriggers)
  i744.m_Interactable = !!i745[18]
  request.r(i745[19], i745[20], 0, i744, 'm_TargetGraphic')
  return i744
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'nameLabel')
  request.r(i747[2], i747[3], 0, i746, 'valueToggle')
  request.r(i747[4], i747[5], 0, i746, 'colorImage')
  request.r(i747[6], i747[7], 0, i746, 'fieldR')
  request.r(i747[8], i747[9], 0, i746, 'fieldG')
  request.r(i747[10], i747[11], 0, i746, 'fieldB')
  request.r(i747[12], i747[13], 0, i746, 'fieldA')
  i746.colorDefault = new pc.Color(i747[14], i747[15], i747[16], i747[17])
  i746.colorSelected = new pc.Color(i747[18], i747[19], i747[20], i747[21])
  return i746
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'nameLabel')
  request.r(i749[2], i749[3], 0, i748, 'valueLabel')
  i748.colorDefault = new pc.Color(i749[4], i749[5], i749[6], i749[7])
  i748.colorSelected = new pc.Color(i749[8], i749[9], i749[10], i749[11])
  return i748
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'nameLabel')
  request.r(i751[2], i751[3], 0, i750, 'valueToggle')
  request.r(i751[4], i751[5], 0, i750, 'fieldX')
  request.r(i751[6], i751[7], 0, i750, 'fieldY')
  i750.colorDefault = new pc.Color(i751[8], i751[9], i751[10], i751[11])
  i750.colorSelected = new pc.Color(i751[12], i751[13], i751[14], i751[15])
  return i750
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'nameLabel')
  request.r(i753[2], i753[3], 0, i752, 'valueToggle')
  request.r(i753[4], i753[5], 0, i752, 'fieldX')
  request.r(i753[6], i753[7], 0, i752, 'fieldY')
  request.r(i753[8], i753[9], 0, i752, 'fieldZ')
  i752.colorDefault = new pc.Color(i753[10], i753[11], i753[12], i753[13])
  i752.colorSelected = new pc.Color(i753[14], i753[15], i753[16], i753[17])
  return i752
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'nameLabel')
  request.r(i755[2], i755[3], 0, i754, 'valueToggle')
  request.r(i755[4], i755[5], 0, i754, 'fieldX')
  request.r(i755[6], i755[7], 0, i754, 'fieldY')
  request.r(i755[8], i755[9], 0, i754, 'fieldZ')
  request.r(i755[10], i755[11], 0, i754, 'fieldW')
  i754.colorDefault = new pc.Color(i755[12], i755[13], i755[14], i755[15])
  i754.colorSelected = new pc.Color(i755[16], i755[17], i755[18], i755[19])
  return i754
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i757 = data
  i756.colorDefault = new pc.Color(i757[0], i757[1], i757[2], i757[3])
  i756.colorSelected = new pc.Color(i757[4], i757[5], i757[6], i757[7])
  return i756
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i759 = data
  i758.m_Spacing = i759[0]
  i758.m_ChildForceExpandWidth = !!i759[1]
  i758.m_ChildForceExpandHeight = !!i759[2]
  i758.m_ChildControlWidth = !!i759[3]
  i758.m_ChildControlHeight = !!i759[4]
  i758.m_ChildScaleWidth = !!i759[5]
  i758.m_ChildScaleHeight = !!i759[6]
  i758.m_ReverseArrangement = !!i759[7]
  i758.m_Padding = UnityEngine.RectOffset.FromPaddings(i759[8], i759[9], i759[10], i759[11])
  i758.m_ChildAlignment = i759[12]
  return i758
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i761 = data
  i760.colorDefault = new pc.Color(i761[0], i761[1], i761[2], i761[3])
  i760.colorSelected = new pc.Color(i761[4], i761[5], i761[6], i761[7])
  return i760
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'nameLabel')
  request.r(i763[2], i763[3], 0, i762, 'header')
  i762.colorDefault = new pc.Color(i763[4], i763[5], i763[6], i763[7])
  i762.colorSelected = new pc.Color(i763[8], i763[9], i763[10], i763[11])
  return i762
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'nameLabel')
  request.r(i765[2], i765[3], 0, i764, 'valueToggle')
  var i767 = i765[4]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 1, i766, '')
  }
  i764.toggles = i766
  i764.colorDefault = new pc.Color(i765[5], i765[6], i765[7], i765[8])
  i764.colorSelected = new pc.Color(i765[9], i765[10], i765[11], i765[12])
  return i764
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'nameLabel')
  request.r(i771[2], i771[3], 0, i770, 'valueToggle')
  request.r(i771[4], i771[5], 0, i770, 'checkmarkImage')
  i770.colorDefault = new pc.Color(i771[6], i771[7], i771[8], i771[9])
  i770.colorSelected = new pc.Color(i771[10], i771[11], i771[12], i771[13])
  return i770
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'nameLabel')
  request.r(i773[2], i773[3], 0, i772, 'valueToggle')
  request.r(i773[4], i773[5], 0, i772, 'checkmarkImage')
  i772.colorDefault = new pc.Color(i773[6], i773[7], i773[8], i773[9])
  i772.colorSelected = new pc.Color(i773[10], i773[11], i773[12], i773[13])
  return i772
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'nextButtonText')
  request.r(i775[2], i775[3], 0, i774, 'previousButtonText')
  request.r(i775[4], i775[5], 0, i774, 'nameLabel')
  request.r(i775[6], i775[7], 0, i774, 'valueLabel')
  i774.colorDefault = new pc.Color(i775[8], i775[9], i775[10], i775[11])
  i774.colorSelected = new pc.Color(i775[12], i775[13], i775[14], i775[15])
  return i774
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'nameLabel')
  request.r(i777[2], i777[3], 0, i776, 'valueToggle')
  i776.colorDefault = new pc.Color(i777[4], i777[5], i777[6], i777[7])
  i776.colorSelected = new pc.Color(i777[8], i777[9], i777[10], i777[11])
  return i776
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'nameLabel')
  i778.colorDefault = new pc.Color(i779[2], i779[3], i779[4], i779[5])
  i778.colorSelected = new pc.Color(i779[6], i779[7], i779[8], i779[9])
  return i778
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'nameLabel')
  request.r(i781[2], i781[3], 0, i780, 'valueLabel')
  request.r(i781[4], i781[5], 0, i780, 'progressBarRect')
  i780.colorDefault = new pc.Color(i781[6], i781[7], i781[8], i781[9])
  i780.colorSelected = new pc.Color(i781[10], i781[11], i781[12], i781[13])
  return i780
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'nameLabel')
  request.r(i783[2], i783[3], 0, i782, 'valueLabel')
  i782.colorDefault = new pc.Color(i783[4], i783[5], i783[6], i783[7])
  i782.colorSelected = new pc.Color(i783[8], i783[9], i783[10], i783[11])
  return i782
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'nameLabel')
  request.r(i785[2], i785[3], 0, i784, 'valueLabel')
  i784.colorDefault = new pc.Color(i785[4], i785[5], i785[6], i785[7])
  i784.colorSelected = new pc.Color(i785[8], i785[9], i785[10], i785[11])
  return i784
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'nextButtonText')
  request.r(i787[2], i787[3], 0, i786, 'previousButtonText')
  request.r(i787[4], i787[5], 0, i786, 'nameLabel')
  request.r(i787[6], i787[7], 0, i786, 'valueLabel')
  i786.colorDefault = new pc.Color(i787[8], i787[9], i787[10], i787[11])
  i786.colorSelected = new pc.Color(i787[12], i787[13], i787[14], i787[15])
  return i786
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'nextButtonText')
  request.r(i789[2], i789[3], 0, i788, 'previousButtonText')
  request.r(i789[4], i789[5], 0, i788, 'nameLabel')
  request.r(i789[6], i789[7], 0, i788, 'valueLabel')
  i788.colorDefault = new pc.Color(i789[8], i789[9], i789[10], i789[11])
  i788.colorSelected = new pc.Color(i789[12], i789[13], i789[14], i789[15])
  return i788
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'panel')
  request.r(i791[2], i791[3], 0, i790, 'valuePrefab')
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i793 = data
  i792.AdditionalLightsPerObjectLimit = i793[0]
  i792.AdditionalLightsRenderingMode = i793[1]
  i792.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i793[2], i792.LightRenderingMode)
  i792.ColorGradingLutSize = i793[3]
  i792.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i793[4], i792.ColorGradingMode)
  i792.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i793[5], i792.MainLightRenderingMode)
  i792.MainLightRenderingModeValue = i793[6]
  i792.SupportsMainLightShadows = !!i793[7]
  i792.MixedLightingSupported = !!i793[8]
  i792.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i793[9], i792.MsaaQuality)
  i792.MSAA = i793[10]
  i792.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i793[11], i792.OpaqueDownsampling)
  i792.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i793[12], i792.MainLightShadowmapResolution)
  i792.MainLightShadowmapResolutionValue = i793[13]
  i792.SupportsSoftShadows = !!i793[14]
  i792.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i793[15], i792.SoftShadowQuality)
  i792.SoftShadowQualityValue = i793[16]
  i792.ShadowDistance = i793[17]
  i792.ShadowCascadeCount = i793[18]
  i792.Cascade2Split = i793[19]
  i792.Cascade3Split = new pc.Vec2( i793[20], i793[21] )
  i792.Cascade4Split = new pc.Vec3( i793[22], i793[23], i793[24] )
  i792.CascadeBorder = i793[25]
  i792.ShadowDepthBias = i793[26]
  i792.ShadowNormalBias = i793[27]
  i792.RenderScale = i793[28]
  i792.RequireDepthTexture = !!i793[29]
  i792.RequireOpaqueTexture = !!i793[30]
  i792.SupportsHDR = !!i793[31]
  i792.SupportsTerrainHoles = !!i793[32]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i795 = data
  i794.Disabled = i795[0]
  i794.PerVertex = i795[1]
  i794.PerPixel = i795[2]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i797 = data
  i796.LowDynamicRange = i797[0]
  i796.HighDynamicRange = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i799 = data
  i798.Disabled = i799[0]
  i798._2x = i799[1]
  i798._4x = i799[2]
  i798._8x = i799[3]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i801 = data
  i800.None = i801[0]
  i800._2xBilinear = i801[1]
  i800._4xBox = i801[2]
  i800._4xBilinear = i801[3]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i803 = data
  i802._256 = i803[0]
  i802._512 = i803[1]
  i802._1024 = i803[2]
  i802._2048 = i803[3]
  i802._4096 = i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i805 = data
  i804.UsePipelineSettings = i805[0]
  i804.Low = i805[1]
  i804.Medium = i805[2]
  i804.High = i805[3]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i807 = data
  var i809 = i807[0]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i809[i + 0]));
  }
  i806.ShaderCompilationErrors = i808
  i806.name = i807[1]
  i806.guid = i807[2]
  var i811 = i807[3]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i806.shaderDefinedKeywords = i810
  var i813 = i807[4]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i813[i + 0]) );
  }
  i806.passes = i812
  var i815 = i807[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i815[i + 0]) );
  }
  i806.usePasses = i814
  var i817 = i807[6]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i817[i + 0]) );
  }
  i806.defaultParameterValues = i816
  request.r(i807[7], i807[8], 0, i806, 'unityFallbackShader')
  i806.readDepth = !!i807[9]
  i806.isCreatedByShaderGraph = !!i807[10]
  i806.compiled = !!i807[11]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i821 = data
  i820.shaderName = i821[0]
  i820.errorMessage = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i826 = root || new pc.UnityShaderPass()
  var i827 = data
  i826.id = i827[0]
  i826.subShaderIndex = i827[1]
  i826.name = i827[2]
  i826.passType = i827[3]
  i826.grabPassTextureName = i827[4]
  i826.usePass = !!i827[5]
  i826.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[6], i826.zTest)
  i826.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[7], i826.zWrite)
  i826.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[8], i826.culling)
  i826.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i827[9], i826.blending)
  i826.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i827[10], i826.alphaBlending)
  i826.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[11], i826.colorWriteMask)
  i826.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[12], i826.offsetUnits)
  i826.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[13], i826.offsetFactor)
  i826.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[14], i826.stencilRef)
  i826.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[15], i826.stencilReadMask)
  i826.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[16], i826.stencilWriteMask)
  i826.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i827[17], i826.stencilOp)
  i826.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i827[18], i826.stencilOpFront)
  i826.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i827[19], i826.stencilOpBack)
  var i829 = i827[20]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i829[i + 0]) );
  }
  i826.tags = i828
  var i831 = i827[21]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( i831[i + 0] );
  }
  i826.passDefinedKeywords = i830
  var i833 = i827[22]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i833[i + 0]) );
  }
  i826.passDefinedKeywordGroups = i832
  var i835 = i827[23]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i835[i + 0]) );
  }
  i826.variants = i834
  var i837 = i827[24]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i837[i + 0]) );
  }
  i826.excludedVariants = i836
  i826.hasDepthReader = !!i827[25]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i839 = data
  i838.val = i839[0]
  i838.name = i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i841 = data
  i840.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[0], i840.src)
  i840.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[1], i840.dst)
  i840.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[2], i840.op)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i843 = data
  i842.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[0], i842.pass)
  i842.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[1], i842.fail)
  i842.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[2], i842.zFail)
  i842.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[3], i842.comp)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i847 = data
  i846.name = i847[0]
  i846.value = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i851 = data
  var i853 = i851[0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i850.keywords = i852
  i850.hasDiscard = !!i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i857 = data
  i856.passId = i857[0]
  i856.subShaderIndex = i857[1]
  var i859 = i857[2]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( i859[i + 0] );
  }
  i856.keywords = i858
  i856.vertexProgram = i857[3]
  i856.fragmentProgram = i857[4]
  i856.exportedForWebGl2 = !!i857[5]
  i856.readDepth = !!i857[6]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'shader')
  i862.pass = i863[2]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i867 = data
  i866.name = i867[0]
  i866.type = i867[1]
  i866.value = new pc.Vec4( i867[2], i867[3], i867[4], i867[5] )
  i866.textureValue = i867[6]
  i866.shaderPropertyFlag = i867[7]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i869 = data
  i868.name = i869[0]
  request.r(i869[1], i869[2], 0, i868, 'texture')
  i868.aabb = i869[3]
  i868.vertices = i869[4]
  i868.triangles = i869[5]
  i868.textureRect = UnityEngine.Rect.MinMaxRect(i869[6], i869[7], i869[8], i869[9])
  i868.packedRect = UnityEngine.Rect.MinMaxRect(i869[10], i869[11], i869[12], i869[13])
  i868.border = new pc.Vec4( i869[14], i869[15], i869[16], i869[17] )
  i868.transparency = i869[18]
  i868.bounds = i869[19]
  i868.pixelsPerUnit = i869[20]
  i868.textureWidth = i869[21]
  i868.textureHeight = i869[22]
  i868.nativeSize = new pc.Vec2( i869[23], i869[24] )
  i868.pivot = new pc.Vec2( i869[25], i869[26] )
  i868.textureRectOffset = new pc.Vec2( i869[27], i869[28] )
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i871 = data
  i870.name = i871[0]
  i870.ascent = i871[1]
  i870.originalLineHeight = i871[2]
  i870.fontSize = i871[3]
  var i873 = i871[4]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i873[i + 0]) );
  }
  i870.characterInfo = i872
  request.r(i871[5], i871[6], 0, i870, 'texture')
  i870.originalFontSize = i871[7]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i877 = data
  i876.index = i877[0]
  i876.advance = i877[1]
  i876.bearing = i877[2]
  i876.glyphWidth = i877[3]
  i876.glyphHeight = i877[4]
  i876.minX = i877[5]
  i876.maxX = i877[6]
  i876.minY = i877[7]
  i876.maxY = i877[8]
  i876.uvBottomLeftX = i877[9]
  i876.uvBottomLeftY = i877[10]
  i876.uvBottomRightX = i877[11]
  i876.uvBottomRightY = i877[12]
  i876.uvTopLeftX = i877[13]
  i876.uvTopLeftY = i877[14]
  i876.uvTopRightX = i877[15]
  i876.uvTopRightY = i877[16]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i879 = data
  i878.name = i879[0]
  i878.bytes64 = i879[1]
  i878.data = i879[2]
  return i878
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i881 = data
  var i883 = i881[0]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 1, i882, '')
  }
  i880.components = i882
  return i880
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i887 = data
  i886.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i887[0], i886.mode)
  i886.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i887[1], i886.neutralHDRRangeReductionMode)
  i886.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i887[2], i886.acesPreset)
  i886.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i887[3], i886.hueShiftAmount)
  i886.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i887[4], i886.detectPaperWhite)
  i886.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i887[5], i886.paperWhite)
  i886.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i887[6], i886.detectBrightnessLimits)
  i886.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i887[7], i886.minNits)
  i886.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i887[8], i886.maxNits)
  i886.active = !!i887[9]
  return i886
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i889 = data
  i888.m_Value = i889[0]
  i888.m_OverrideState = !!i889[1]
  return i888
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i891 = data
  i890.m_Value = i891[0]
  i890.m_OverrideState = !!i891[1]
  return i890
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i893 = data
  i892.m_Value = i893[0]
  i892.m_OverrideState = !!i893[1]
  return i892
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i895 = data
  i894.m_Value = i895[0]
  i894.m_OverrideState = !!i895[1]
  return i894
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i897 = data
  i896.m_Value = !!i897[0]
  i896.m_OverrideState = !!i897[1]
  return i896
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i899 = data
  i898.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i899[0], i898.skipIterations)
  i898.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i899[1], i898.threshold)
  i898.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i899[2], i898.intensity)
  i898.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i899[3], i898.scatter)
  i898.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i899[4], i898.clamp)
  i898.tint = request.d('UnityEngine.Rendering.ColorParameter', i899[5], i898.tint)
  i898.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i899[6], i898.highQualityFiltering)
  i898.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i899[7], i898.downscale)
  i898.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i899[8], i898.maxIterations)
  i898.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i899[9], i898.dirtTexture)
  i898.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i899[10], i898.dirtIntensity)
  i898.active = !!i899[11]
  return i898
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i901 = data
  i900.m_Value = i901[0]
  i900.m_OverrideState = !!i901[1]
  return i900
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i903 = data
  i902.m_Value = i903[0]
  i902.m_OverrideState = !!i903[1]
  return i902
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i905 = data
  i904.m_Value = new pc.Color(i905[0], i905[1], i905[2], i905[3])
  i904.m_OverrideState = !!i905[4]
  return i904
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i907 = data
  i906.m_Value = i907[0]
  i906.m_OverrideState = !!i907[1]
  return i906
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i909 = data
  i908.dimension = i909[0]
  request.r(i909[1], i909[2], 0, i908, 'm_Value')
  i908.m_OverrideState = !!i909[3]
  return i908
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i911 = data
  i910.color = request.d('UnityEngine.Rendering.ColorParameter', i911[0], i910.color)
  i910.center = request.d('UnityEngine.Rendering.Vector2Parameter', i911[1], i910.center)
  i910.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i911[2], i910.intensity)
  i910.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i911[3], i910.smoothness)
  i910.rounded = request.d('UnityEngine.Rendering.BoolParameter', i911[4], i910.rounded)
  i910.active = !!i911[5]
  return i910
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i913 = data
  i912.m_Value = new pc.Vec2( i913[0], i913[1] )
  i912.m_OverrideState = !!i913[2]
  return i912
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i914 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i915 = data
  i914.useSafeMode = !!i915[0]
  i914.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i915[1], i914.safeModeOptions)
  i914.timeScale = i915[2]
  i914.unscaledTimeScale = i915[3]
  i914.useSmoothDeltaTime = !!i915[4]
  i914.maxSmoothUnscaledTime = i915[5]
  i914.rewindCallbackMode = i915[6]
  i914.showUnityEditorReport = !!i915[7]
  i914.logBehaviour = i915[8]
  i914.drawGizmos = !!i915[9]
  i914.defaultRecyclable = !!i915[10]
  i914.defaultAutoPlay = i915[11]
  i914.defaultUpdateType = i915[12]
  i914.defaultTimeScaleIndependent = !!i915[13]
  i914.defaultEaseType = i915[14]
  i914.defaultEaseOvershootOrAmplitude = i915[15]
  i914.defaultEasePeriod = i915[16]
  i914.defaultAutoKill = !!i915[17]
  i914.defaultLoopType = i915[18]
  i914.debugMode = !!i915[19]
  i914.debugStoreTargetId = !!i915[20]
  i914.showPreviewPanel = !!i915[21]
  i914.storeSettingsLocation = i915[22]
  i914.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i915[23], i914.modules)
  i914.createASMDEF = !!i915[24]
  i914.showPlayingTweens = !!i915[25]
  i914.showPausedTweens = !!i915[26]
  return i914
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i916 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i917 = data
  i916.logBehaviour = i917[0]
  i916.nestedTweenFailureBehaviour = i917[1]
  return i916
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i918 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i919 = data
  i918.showPanel = !!i919[0]
  i918.audioEnabled = !!i919[1]
  i918.physicsEnabled = !!i919[2]
  i918.physics2DEnabled = !!i919[3]
  i918.spriteEnabled = !!i919[4]
  i918.uiEnabled = !!i919[5]
  i918.textMeshProEnabled = !!i919[6]
  i918.tk2DEnabled = !!i919[7]
  i918.deAudioEnabled = !!i919[8]
  i918.deUnityExtendedEnabled = !!i919[9]
  i918.epoOutlineEnabled = !!i919[10]
  return i918
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.TMP_Settings' )
  var i921 = data
  i920.m_enableWordWrapping = !!i921[0]
  i920.m_enableKerning = !!i921[1]
  i920.m_enableExtraPadding = !!i921[2]
  i920.m_enableTintAllSprites = !!i921[3]
  i920.m_enableParseEscapeCharacters = !!i921[4]
  i920.m_EnableRaycastTarget = !!i921[5]
  i920.m_GetFontFeaturesAtRuntime = !!i921[6]
  i920.m_missingGlyphCharacter = i921[7]
  i920.m_warningsDisabled = !!i921[8]
  request.r(i921[9], i921[10], 0, i920, 'm_defaultFontAsset')
  i920.m_defaultFontAssetPath = i921[11]
  i920.m_defaultFontSize = i921[12]
  i920.m_defaultAutoSizeMinRatio = i921[13]
  i920.m_defaultAutoSizeMaxRatio = i921[14]
  i920.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i921[15], i921[16] )
  i920.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i921[17], i921[18] )
  i920.m_autoSizeTextContainer = !!i921[19]
  i920.m_IsTextObjectScaleStatic = !!i921[20]
  var i923 = i921[21]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 1, i922, '')
  }
  i920.m_fallbackFontAssets = i922
  i920.m_matchMaterialPreset = !!i921[22]
  request.r(i921[23], i921[24], 0, i920, 'm_defaultSpriteAsset')
  i920.m_defaultSpriteAssetPath = i921[25]
  i920.m_enableEmojiSupport = !!i921[26]
  i920.m_MissingCharacterSpriteUnicode = i921[27]
  i920.m_defaultColorGradientPresetsPath = i921[28]
  request.r(i921[29], i921[30], 0, i920, 'm_defaultStyleSheet')
  i920.m_StyleSheetsResourcePath = i921[31]
  request.r(i921[32], i921[33], 0, i920, 'm_leadingCharacters')
  request.r(i921[34], i921[35], 0, i920, 'm_followingCharacters')
  i920.m_UseModernHangulLineBreakingRules = !!i921[36]
  return i920
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i927 = data
  i926.hashCode = i927[0]
  request.r(i927[1], i927[2], 0, i926, 'material')
  i926.materialHashCode = i927[3]
  request.r(i927[4], i927[5], 0, i926, 'atlas')
  i926.normalStyle = i927[6]
  i926.normalSpacingOffset = i927[7]
  i926.boldStyle = i927[8]
  i926.boldSpacing = i927[9]
  i926.italicStyle = i927[10]
  i926.tabSize = i927[11]
  i926.m_Version = i927[12]
  i926.m_SourceFontFileGUID = i927[13]
  request.r(i927[14], i927[15], 0, i926, 'm_SourceFontFile_EditorRef')
  request.r(i927[16], i927[17], 0, i926, 'm_SourceFontFile')
  i926.m_AtlasPopulationMode = i927[18]
  i926.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i927[19], i926.m_FaceInfo)
  var i929 = i927[20]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('UnityEngine.TextCore.Glyph', i929[i + 0]));
  }
  i926.m_GlyphTable = i928
  var i931 = i927[21]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i931.length; i += 1) {
    i930.add(request.d('TMPro.TMP_Character', i931[i + 0]));
  }
  i926.m_CharacterTable = i930
  var i933 = i927[22]
  var i932 = []
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 2, i932, '')
  }
  i926.m_AtlasTextures = i932
  i926.m_AtlasTextureIndex = i927[23]
  i926.m_IsMultiAtlasTexturesEnabled = !!i927[24]
  i926.m_ClearDynamicDataOnBuild = !!i927[25]
  var i935 = i927[26]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i935.length; i += 1) {
    i934.add(request.d('UnityEngine.TextCore.GlyphRect', i935[i + 0]));
  }
  i926.m_UsedGlyphRects = i934
  var i937 = i927[27]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('UnityEngine.TextCore.GlyphRect', i937[i + 0]));
  }
  i926.m_FreeGlyphRects = i936
  i926.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i927[28], i926.m_fontInfo)
  i926.m_AtlasWidth = i927[29]
  i926.m_AtlasHeight = i927[30]
  i926.m_AtlasPadding = i927[31]
  i926.m_AtlasRenderMode = i927[32]
  var i939 = i927[33]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('TMPro.TMP_Glyph', i939[i + 0]));
  }
  i926.m_glyphInfoList = i938
  i926.m_KerningTable = request.d('TMPro.KerningTable', i927[34], i926.m_KerningTable)
  i926.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i927[35], i926.m_FontFeatureTable)
  var i941 = i927[36]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 1, i940, '')
  }
  i926.fallbackFontAssets = i940
  var i943 = i927[37]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 1, i942, '')
  }
  i926.m_FallbackFontAssetTable = i942
  i926.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i927[38], i926.m_CreationSettings)
  var i945 = i927[39]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('TMPro.TMP_FontWeightPair', i945[i + 0]) );
  }
  i926.m_FontWeightTable = i944
  var i947 = i927[40]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('TMPro.TMP_FontWeightPair', i947[i + 0]) );
  }
  i926.fontWeights = i946
  return i926
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i949 = data
  i948.m_FaceIndex = i949[0]
  i948.m_FamilyName = i949[1]
  i948.m_StyleName = i949[2]
  i948.m_PointSize = i949[3]
  i948.m_Scale = i949[4]
  i948.m_UnitsPerEM = i949[5]
  i948.m_LineHeight = i949[6]
  i948.m_AscentLine = i949[7]
  i948.m_CapLine = i949[8]
  i948.m_MeanLine = i949[9]
  i948.m_Baseline = i949[10]
  i948.m_DescentLine = i949[11]
  i948.m_SuperscriptOffset = i949[12]
  i948.m_SuperscriptSize = i949[13]
  i948.m_SubscriptOffset = i949[14]
  i948.m_SubscriptSize = i949[15]
  i948.m_UnderlineOffset = i949[16]
  i948.m_UnderlineThickness = i949[17]
  i948.m_StrikethroughOffset = i949[18]
  i948.m_StrikethroughThickness = i949[19]
  i948.m_TabWidth = i949[20]
  return i948
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i953 = data
  i952.m_Index = i953[0]
  i952.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i953[1], i952.m_Metrics)
  i952.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i953[2], i952.m_GlyphRect)
  i952.m_Scale = i953[3]
  i952.m_AtlasIndex = i953[4]
  i952.m_ClassDefinitionType = i953[5]
  return i952
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i955 = data
  i954.m_Width = i955[0]
  i954.m_Height = i955[1]
  i954.m_HorizontalBearingX = i955[2]
  i954.m_HorizontalBearingY = i955[3]
  i954.m_HorizontalAdvance = i955[4]
  return i954
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i957 = data
  i956.m_X = i957[0]
  i956.m_Y = i957[1]
  i956.m_Width = i957[2]
  i956.m_Height = i957[3]
  return i956
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.TMP_Character' )
  var i961 = data
  i960.m_ElementType = i961[0]
  i960.m_Unicode = i961[1]
  i960.m_GlyphIndex = i961[2]
  i960.m_Scale = i961[3]
  return i960
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i967 = data
  i966.Name = i967[0]
  i966.PointSize = i967[1]
  i966.Scale = i967[2]
  i966.CharacterCount = i967[3]
  i966.LineHeight = i967[4]
  i966.Baseline = i967[5]
  i966.Ascender = i967[6]
  i966.CapHeight = i967[7]
  i966.Descender = i967[8]
  i966.CenterLine = i967[9]
  i966.SuperscriptOffset = i967[10]
  i966.SubscriptOffset = i967[11]
  i966.SubSize = i967[12]
  i966.Underline = i967[13]
  i966.UnderlineThickness = i967[14]
  i966.strikethrough = i967[15]
  i966.strikethroughThickness = i967[16]
  i966.TabWidth = i967[17]
  i966.Padding = i967[18]
  i966.AtlasWidth = i967[19]
  i966.AtlasHeight = i967[20]
  return i966
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_Glyph' )
  var i971 = data
  i970.id = i971[0]
  i970.x = i971[1]
  i970.y = i971[2]
  i970.width = i971[3]
  i970.height = i971[4]
  i970.xOffset = i971[5]
  i970.yOffset = i971[6]
  i970.xAdvance = i971[7]
  i970.scale = i971[8]
  return i970
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.KerningTable' )
  var i973 = data
  var i975 = i973[0]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i975.length; i += 1) {
    i974.add(request.d('TMPro.KerningPair', i975[i + 0]));
  }
  i972.kerningPairs = i974
  return i972
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.KerningPair' )
  var i979 = data
  i978.xOffset = i979[0]
  i978.m_FirstGlyph = i979[1]
  i978.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i979[2], i978.m_FirstGlyphAdjustments)
  i978.m_SecondGlyph = i979[3]
  i978.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i979[4], i978.m_SecondGlyphAdjustments)
  i978.m_IgnoreSpacingAdjustments = !!i979[5]
  return i978
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i981 = data
  var i983 = i981[0]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i983[i + 0]));
  }
  i980.m_GlyphPairAdjustmentRecords = i982
  return i980
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i987 = data
  i986.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i987[0], i986.m_FirstAdjustmentRecord)
  i986.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i987[1], i986.m_SecondAdjustmentRecord)
  i986.m_FeatureLookupFlags = i987[2]
  return i986
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i989 = data
  i988.m_GlyphIndex = i989[0]
  i988.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i989[1], i988.m_GlyphValueRecord)
  return i988
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i991 = data
  i990.m_XPlacement = i991[0]
  i990.m_YPlacement = i991[1]
  i990.m_XAdvance = i991[2]
  i990.m_YAdvance = i991[3]
  return i990
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i993 = data
  i992.sourceFontFileName = i993[0]
  i992.sourceFontFileGUID = i993[1]
  i992.pointSizeSamplingMode = i993[2]
  i992.pointSize = i993[3]
  i992.padding = i993[4]
  i992.packingMode = i993[5]
  i992.atlasWidth = i993[6]
  i992.atlasHeight = i993[7]
  i992.characterSetSelectionMode = i993[8]
  i992.characterSequence = i993[9]
  i992.referencedFontAssetGUID = i993[10]
  i992.referencedTextAssetGUID = i993[11]
  i992.fontStyle = i993[12]
  i992.fontStyleModifier = i993[13]
  i992.renderMode = i993[14]
  i992.includeFontFeatures = !!i993[15]
  return i992
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'regularTypeface')
  request.r(i997[2], i997[3], 0, i996, 'italicTypeface')
  return i996
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i999 = data
  i998.hashCode = i999[0]
  request.r(i999[1], i999[2], 0, i998, 'material')
  i998.materialHashCode = i999[3]
  request.r(i999[4], i999[5], 0, i998, 'spriteSheet')
  var i1001 = i999[6]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(request.d('TMPro.TMP_Sprite', i1001[i + 0]));
  }
  i998.spriteInfoList = i1000
  var i1003 = i999[7]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 1, i1002, '')
  }
  i998.fallbackSpriteAssets = i1002
  i998.m_Version = i999[8]
  i998.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i999[9], i998.m_FaceInfo)
  var i1005 = i999[10]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_SpriteCharacter', i1005[i + 0]));
  }
  i998.m_SpriteCharacterTable = i1004
  var i1007 = i999[11]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.add(request.d('TMPro.TMP_SpriteGlyph', i1007[i + 0]));
  }
  i998.m_SpriteGlyphTable = i1006
  return i998
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.hashCode = i1011[1]
  i1010.unicode = i1011[2]
  i1010.pivot = new pc.Vec2( i1011[3], i1011[4] )
  request.r(i1011[5], i1011[6], 0, i1010, 'sprite')
  i1010.id = i1011[7]
  i1010.x = i1011[8]
  i1010.y = i1011[9]
  i1010.width = i1011[10]
  i1010.height = i1011[11]
  i1010.xOffset = i1011[12]
  i1010.yOffset = i1011[13]
  i1010.xAdvance = i1011[14]
  i1010.scale = i1011[15]
  return i1010
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1017 = data
  i1016.m_Name = i1017[0]
  i1016.m_HashCode = i1017[1]
  i1016.m_ElementType = i1017[2]
  i1016.m_Unicode = i1017[3]
  i1016.m_GlyphIndex = i1017[4]
  i1016.m_Scale = i1017[5]
  return i1016
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'sprite')
  i1020.m_Index = i1021[2]
  i1020.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1021[3], i1020.m_Metrics)
  i1020.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1021[4], i1020.m_GlyphRect)
  i1020.m_Scale = i1021[5]
  i1020.m_AtlasIndex = i1021[6]
  i1020.m_ClassDefinitionType = i1021[7]
  return i1020
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('TMPro.TMP_Style', i1025[i + 0]));
  }
  i1022.m_StyleList = i1024
  return i1022
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1028 = root || request.c( 'TMPro.TMP_Style' )
  var i1029 = data
  i1028.m_Name = i1029[0]
  i1028.m_HashCode = i1029[1]
  i1028.m_OpeningDefinition = i1029[2]
  i1028.m_ClosingDefinition = i1029[3]
  i1028.m_OpeningTagArray = i1029[4]
  i1028.m_ClosingTagArray = i1029[5]
  i1028.m_OpeningTagUnicodeArray = i1029[6]
  i1028.m_ClosingTagUnicodeArray = i1029[7]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1033[i + 0]) );
  }
  i1030.files = i1032
  i1030.componentToPrefabIds = i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1037 = data
  i1036.path = i1037[0]
  request.r(i1037[1], i1037[2], 0, i1036, 'unityObject')
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1041[i + 0]) );
  }
  i1038.scriptsExecutionOrder = i1040
  var i1043 = i1039[1]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1043[i + 0]) );
  }
  i1038.sortingLayers = i1042
  var i1045 = i1039[2]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1045[i + 0]) );
  }
  i1038.cullingLayers = i1044
  i1038.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1039[3], i1038.timeSettings)
  i1038.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1039[4], i1038.physicsSettings)
  i1038.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1039[5], i1038.physics2DSettings)
  i1038.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1039[6], i1038.qualitySettings)
  i1038.enableRealtimeShadows = !!i1039[7]
  i1038.enableAutoInstancing = !!i1039[8]
  i1038.enableDynamicBatching = !!i1039[9]
  i1038.lightmapEncodingQuality = i1039[10]
  i1038.desiredColorSpace = i1039[11]
  var i1047 = i1039[12]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( i1047[i + 0] );
  }
  i1038.allTags = i1046
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1051 = data
  i1050.name = i1051[0]
  i1050.value = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1055 = data
  i1054.id = i1055[0]
  i1054.name = i1055[1]
  i1054.value = i1055[2]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1059 = data
  i1058.id = i1059[0]
  i1058.name = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1061 = data
  i1060.fixedDeltaTime = i1061[0]
  i1060.maximumDeltaTime = i1061[1]
  i1060.timeScale = i1061[2]
  i1060.maximumParticleTimestep = i1061[3]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1063 = data
  i1062.gravity = new pc.Vec3( i1063[0], i1063[1], i1063[2] )
  i1062.defaultSolverIterations = i1063[3]
  i1062.bounceThreshold = i1063[4]
  i1062.autoSyncTransforms = !!i1063[5]
  i1062.autoSimulation = !!i1063[6]
  var i1065 = i1063[7]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1065[i + 0]) );
  }
  i1062.collisionMatrix = i1064
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1069 = data
  i1068.enabled = !!i1069[0]
  i1068.layerId = i1069[1]
  i1068.otherLayerId = i1069[2]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'material')
  i1070.gravity = new pc.Vec2( i1071[2], i1071[3] )
  i1070.positionIterations = i1071[4]
  i1070.velocityIterations = i1071[5]
  i1070.velocityThreshold = i1071[6]
  i1070.maxLinearCorrection = i1071[7]
  i1070.maxAngularCorrection = i1071[8]
  i1070.maxTranslationSpeed = i1071[9]
  i1070.maxRotationSpeed = i1071[10]
  i1070.baumgarteScale = i1071[11]
  i1070.baumgarteTOIScale = i1071[12]
  i1070.timeToSleep = i1071[13]
  i1070.linearSleepTolerance = i1071[14]
  i1070.angularSleepTolerance = i1071[15]
  i1070.defaultContactOffset = i1071[16]
  i1070.autoSimulation = !!i1071[17]
  i1070.queriesHitTriggers = !!i1071[18]
  i1070.queriesStartInColliders = !!i1071[19]
  i1070.callbacksOnDisable = !!i1071[20]
  i1070.reuseCollisionCallbacks = !!i1071[21]
  i1070.autoSyncTransforms = !!i1071[22]
  var i1073 = i1071[23]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1073[i + 0]) );
  }
  i1070.collisionMatrix = i1072
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1077 = data
  i1076.enabled = !!i1077[0]
  i1076.layerId = i1077[1]
  i1076.otherLayerId = i1077[2]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1081[i + 0]) );
  }
  i1078.qualityLevels = i1080
  var i1083 = i1079[1]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1078.names = i1082
  i1078.shadows = i1079[2]
  i1078.anisotropicFiltering = i1079[3]
  i1078.antiAliasing = i1079[4]
  i1078.lodBias = i1079[5]
  i1078.shadowCascades = i1079[6]
  i1078.shadowDistance = i1079[7]
  i1078.shadowmaskMode = i1079[8]
  i1078.shadowProjection = i1079[9]
  i1078.shadowResolution = i1079[10]
  i1078.softParticles = !!i1079[11]
  i1078.softVegetation = !!i1079[12]
  i1078.activeColorSpace = i1079[13]
  i1078.desiredColorSpace = i1079[14]
  i1078.masterTextureLimit = i1079[15]
  i1078.maxQueuedFrames = i1079[16]
  i1078.particleRaycastBudget = i1079[17]
  i1078.pixelLightCount = i1079[18]
  i1078.realtimeReflectionProbes = !!i1079[19]
  i1078.shadowCascade2Split = i1079[20]
  i1078.shadowCascade4Split = new pc.Vec3( i1079[21], i1079[22], i1079[23] )
  i1078.streamingMipmapsActive = !!i1079[24]
  i1078.vSyncCount = i1079[25]
  i1078.asyncUploadBufferSize = i1079[26]
  i1078.asyncUploadTimeSlice = i1079[27]
  i1078.billboardsFaceCameraPosition = !!i1079[28]
  i1078.shadowNearPlaneOffset = i1079[29]
  i1078.streamingMipmapsMemoryBudget = i1079[30]
  i1078.maximumLODLevel = i1079[31]
  i1078.streamingMipmapsAddAllCameras = !!i1079[32]
  i1078.streamingMipmapsMaxLevelReduction = i1079[33]
  i1078.streamingMipmapsRenderersPerFrame = i1079[34]
  i1078.resolutionScalingFixedDPIFactor = i1079[35]
  i1078.streamingMipmapsMaxFileIORequests = i1079[36]
  i1078.currentQualityLevel = i1079[37]
  return i1078
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1087 = data
  i1086.xPlacement = i1087[0]
  i1086.yPlacement = i1087[1]
  i1086.xAdvance = i1087[2]
  i1086.yAdvance = i1087[3]
  return i1086
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[85],"86":[2],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[96],"97":[96],"98":[96],"99":[96],"100":[96],"101":[96],"102":[96],"103":[96],"104":[96],"105":[96],"106":[96],"107":[96],"108":[96],"109":[2],"110":[111],"112":[113],"114":[113],"17":[16],"115":[96],"116":[21,117,16],"45":[16],"118":[2],"5":[2],"7":[6],"119":[120],"121":[16],"122":[16],"19":[17],"22":[21,16],"123":[16],"18":[17],"25":[16],"124":[16],"53":[16],"125":[16],"30":[16],"126":[16],"24":[16],"34":[16],"127":[16],"128":[21,16],"129":[16],"33":[16],"29":[16],"130":[16],"28":[21,16],"38":[16],"131":[11],"132":[11],"12":[11],"133":[11],"134":[2],"135":[2],"136":[120],"137":[16],"138":[111,16],"139":[16,21],"140":[16],"141":[21,16],"142":[111],"143":[21,16],"144":[16],"145":[120]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.GameObject","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","PlayerController","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "c31de85d-868b-478a-aebe-02cb7474ad0c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

