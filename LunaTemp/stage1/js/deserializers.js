var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointSpring' )
  var i607 = data
  i606.spring = i607[0]
  i606.damper = i607[1]
  i606.targetPosition = i607[2]
  return i606
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointMotor' )
  var i609 = data
  i608.m_TargetVelocity = i609[0]
  i608.m_Force = i609[1]
  i608.m_FreeSpin = i609[2]
  return i608
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointLimits' )
  var i611 = data
  i610.m_Min = i611[0]
  i610.m_Max = i611[1]
  i610.m_Bounciness = i611[2]
  i610.m_BounceMinVelocity = i611[3]
  i610.m_ContactDistance = i611[4]
  i610.minBounce = i611[5]
  i610.maxBounce = i611[6]
  return i610
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointDrive' )
  var i613 = data
  i612.m_PositionSpring = i613[0]
  i612.m_PositionDamper = i613[1]
  i612.m_MaximumForce = i613[2]
  i612.m_UseAcceleration = i613[3]
  return i612
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i615 = data
  i614.m_Spring = i615[0]
  i614.m_Damper = i615[1]
  return i614
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i617 = data
  i616.m_Limit = i617[0]
  i616.m_Bounciness = i617[1]
  i616.m_ContactDistance = i617[2]
  return i616
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i619 = data
  i618.m_ExtremumSlip = i619[0]
  i618.m_ExtremumValue = i619[1]
  i618.m_AsymptoteSlip = i619[2]
  i618.m_AsymptoteValue = i619[3]
  i618.m_Stiffness = i619[4]
  return i618
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i621 = data
  i620.m_LowerAngle = i621[0]
  i620.m_UpperAngle = i621[1]
  return i620
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i623 = data
  i622.m_MotorSpeed = i623[0]
  i622.m_MaximumMotorTorque = i623[1]
  return i622
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i625 = data
  i624.m_DampingRatio = i625[0]
  i624.m_Frequency = i625[1]
  i624.m_Angle = i625[2]
  return i624
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i627 = data
  i626.m_LowerTranslation = i627[0]
  i626.m_UpperTranslation = i627[1]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i629 = data
  i628.name = i629[0]
  i628.width = i629[1]
  i628.height = i629[2]
  i628.mipmapCount = i629[3]
  i628.anisoLevel = i629[4]
  i628.filterMode = i629[5]
  i628.hdr = !!i629[6]
  i628.format = i629[7]
  i628.wrapMode = i629[8]
  i628.alphaIsTransparency = !!i629[9]
  i628.alphaSource = i629[10]
  i628.graphicsFormat = i629[11]
  i628.sRGBTexture = !!i629[12]
  i628.desiredColorSpace = i629[13]
  i628.wrapU = i629[14]
  i628.wrapV = i629[15]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i630 = root || new pc.UnityMaterial()
  var i631 = data
  i630.name = i631[0]
  request.r(i631[1], i631[2], 0, i630, 'shader')
  i630.renderQueue = i631[3]
  i630.enableInstancing = !!i631[4]
  var i633 = i631[5]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i633[i + 0]) );
  }
  i630.floatParameters = i632
  var i635 = i631[6]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i635[i + 0]) );
  }
  i630.colorParameters = i634
  var i637 = i631[7]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i637[i + 0]) );
  }
  i630.vectorParameters = i636
  var i639 = i631[8]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i639[i + 0]) );
  }
  i630.textureParameters = i638
  var i641 = i631[9]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i641[i + 0]) );
  }
  i630.materialFlags = i640
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i645 = data
  i644.name = i645[0]
  i644.value = i645[1]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i649 = data
  i648.name = i649[0]
  i648.value = new pc.Color(i649[1], i649[2], i649[3], i649[4])
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i653 = data
  i652.name = i653[0]
  i652.value = new pc.Vec4( i653[1], i653[2], i653[3], i653[4] )
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i657 = data
  i656.name = i657[0]
  request.r(i657[1], i657[2], 0, i656, 'value')
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i661 = data
  i660.name = i661[0]
  i660.enabled = !!i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i663 = data
  i662.position = new pc.Vec3( i663[0], i663[1], i663[2] )
  i662.scale = new pc.Vec3( i663[3], i663[4], i663[5] )
  i662.rotation = new pc.Quat(i663[6], i663[7], i663[8], i663[9])
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'sharedMesh')
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'additionalVertexStreams')
  i666.enabled = !!i667[2]
  request.r(i667[3], i667[4], 0, i666, 'sharedMaterial')
  var i669 = i667[5]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.sharedMaterials = i668
  i666.receiveShadows = !!i667[6]
  i666.shadowCastingMode = i667[7]
  i666.sortingLayerID = i667[8]
  i666.sortingOrder = i667[9]
  i666.lightmapIndex = i667[10]
  i666.lightmapSceneIndex = i667[11]
  i666.lightmapScaleOffset = new pc.Vec4( i667[12], i667[13], i667[14], i667[15] )
  i666.lightProbeUsage = i667[16]
  i666.reflectionProbeUsage = i667[17]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i673 = data
  i672.center = new pc.Vec3( i673[0], i673[1], i673[2] )
  i672.size = new pc.Vec3( i673[3], i673[4], i673[5] )
  i672.enabled = !!i673[6]
  i672.isTrigger = !!i673[7]
  request.r(i673[8], i673[9], 0, i672, 'material')
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i675 = data
  i674.name = i675[0]
  i674.tagId = i675[1]
  i674.enabled = !!i675[2]
  i674.isStatic = !!i675[3]
  i674.layer = i675[4]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i677 = data
  i676.name = i677[0]
  i676.halfPrecision = !!i677[1]
  i676.useUInt32IndexFormat = !!i677[2]
  i676.vertexCount = i677[3]
  i676.aabb = i677[4]
  var i679 = i677[5]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( !!i679[i + 0] );
  }
  i676.streams = i678
  i676.vertices = i677[6]
  var i681 = i677[7]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i681[i + 0]) );
  }
  i676.subMeshes = i680
  var i683 = i677[8]
  var i682 = []
  for(var i = 0; i < i683.length; i += 16) {
    i682.push( new pc.Mat4().setData(i683[i + 0], i683[i + 1], i683[i + 2], i683[i + 3],  i683[i + 4], i683[i + 5], i683[i + 6], i683[i + 7],  i683[i + 8], i683[i + 9], i683[i + 10], i683[i + 11],  i683[i + 12], i683[i + 13], i683[i + 14], i683[i + 15]) );
  }
  i676.bindposes = i682
  var i685 = i677[9]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i685[i + 0]) );
  }
  i676.blendShapes = i684
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i691 = data
  i690.triangles = i691[0]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i697 = data
  i696.name = i697[0]
  var i699 = i697[1]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i699[i + 0]) );
  }
  i696.frames = i698
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i701 = data
  i700.pivot = new pc.Vec2( i701[0], i701[1] )
  i700.anchorMin = new pc.Vec2( i701[2], i701[3] )
  i700.anchorMax = new pc.Vec2( i701[4], i701[5] )
  i700.sizeDelta = new pc.Vec2( i701[6], i701[7] )
  i700.anchoredPosition3D = new pc.Vec3( i701[8], i701[9], i701[10] )
  i700.rotation = new pc.Quat(i701[11], i701[12], i701[13], i701[14])
  i700.scale = new pc.Vec3( i701[15], i701[16], i701[17] )
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i703 = data
  i702.cullTransparentMesh = !!i703[0]
  return i702
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.Image' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_Sprite')
  i704.m_Type = i705[2]
  i704.m_PreserveAspect = !!i705[3]
  i704.m_FillCenter = !!i705[4]
  i704.m_FillMethod = i705[5]
  i704.m_FillAmount = i705[6]
  i704.m_FillClockwise = !!i705[7]
  i704.m_FillOrigin = i705[8]
  i704.m_UseSpriteMesh = !!i705[9]
  i704.m_PixelsPerUnitMultiplier = i705[10]
  request.r(i705[11], i705[12], 0, i704, 'm_Material')
  i704.m_Maskable = !!i705[13]
  i704.m_Color = new pc.Color(i705[14], i705[15], i705[16], i705[17])
  i704.m_RaycastTarget = !!i705[18]
  i704.m_RaycastPadding = new pc.Vec4( i705[19], i705[20], i705[21], i705[22] )
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i707 = data
  i706.name = i707[0]
  i706.atlasId = i707[1]
  i706.mipmapCount = i707[2]
  i706.hdr = !!i707[3]
  i706.size = i707[4]
  i706.anisoLevel = i707[5]
  i706.filterMode = i707[6]
  var i709 = i707[7]
  var i708 = []
  for(var i = 0; i < i709.length; i += 4) {
    i708.push( UnityEngine.Rect.MinMaxRect(i709[i + 0], i709[i + 1], i709[i + 2], i709[i + 3]) );
  }
  i706.rects = i708
  i706.wrapU = i707[8]
  i706.wrapV = i707[9]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i713 = data
  i712.name = i713[0]
  i712.index = i713[1]
  i712.startup = !!i713[2]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i715 = data
  i714.enabled = !!i715[0]
  i714.aspect = i715[1]
  i714.orthographic = !!i715[2]
  i714.orthographicSize = i715[3]
  i714.backgroundColor = new pc.Color(i715[4], i715[5], i715[6], i715[7])
  i714.nearClipPlane = i715[8]
  i714.farClipPlane = i715[9]
  i714.fieldOfView = i715[10]
  i714.depth = i715[11]
  i714.clearFlags = i715[12]
  i714.cullingMask = i715[13]
  i714.rect = i715[14]
  request.r(i715[15], i715[16], 0, i714, 'targetTexture')
  i714.usePhysicalProperties = !!i715[17]
  i714.focalLength = i715[18]
  i714.sensorSize = new pc.Vec2( i715[19], i715[20] )
  i714.lensShift = new pc.Vec2( i715[21], i715[22] )
  i714.gateFit = i715[23]
  i714.commandBufferCount = i715[24]
  i714.cameraType = i715[25]
  return i714
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i717 = data
  i716.m_RenderShadows = !!i717[0]
  i716.m_RequiresDepthTextureOption = i717[1]
  i716.m_RequiresOpaqueTextureOption = i717[2]
  i716.m_CameraType = i717[3]
  var i719 = i717[4]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 1, i718, '')
  }
  i716.m_Cameras = i718
  i716.m_RendererIndex = i717[5]
  i716.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i717[6] )
  request.r(i717[7], i717[8], 0, i716, 'm_VolumeTrigger')
  i716.m_VolumeFrameworkUpdateModeOption = i717[9]
  i716.m_RenderPostProcessing = !!i717[10]
  i716.m_Antialiasing = i717[11]
  i716.m_AntialiasingQuality = i717[12]
  i716.m_StopNaN = !!i717[13]
  i716.m_Dithering = !!i717[14]
  i716.m_ClearDepth = !!i717[15]
  i716.m_AllowXRRendering = !!i717[16]
  i716.m_AllowHDROutput = !!i717[17]
  i716.m_UseScreenCoordOverride = !!i717[18]
  i716.m_ScreenSizeOverride = new pc.Vec4( i717[19], i717[20], i717[21], i717[22] )
  i716.m_ScreenCoordScaleBias = new pc.Vec4( i717[23], i717[24], i717[25], i717[26] )
  i716.m_RequiresDepthTexture = !!i717[27]
  i716.m_RequiresColorTexture = !!i717[28]
  i716.m_Version = i717[29]
  i716.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i717[30], i716.m_TaaSettings)
  return i716
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i723 = data
  i722.m_Quality = i723[0]
  i722.m_FrameInfluence = i723[1]
  i722.m_JitterScale = i723[2]
  i722.m_MipBias = i723[3]
  i722.m_VarianceClampScale = i723[4]
  i722.m_ContrastAdaptiveSharpening = i723[5]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i725 = data
  i724.enabled = !!i725[0]
  i724.type = i725[1]
  i724.color = new pc.Color(i725[2], i725[3], i725[4], i725[5])
  i724.cullingMask = i725[6]
  i724.intensity = i725[7]
  i724.range = i725[8]
  i724.spotAngle = i725[9]
  i724.shadows = i725[10]
  i724.shadowNormalBias = i725[11]
  i724.shadowBias = i725[12]
  i724.shadowStrength = i725[13]
  i724.shadowResolution = i725[14]
  i724.lightmapBakeType = i725[15]
  i724.renderMode = i725[16]
  request.r(i725[17], i725[18], 0, i724, 'cookie')
  i724.cookieSize = i725[19]
  return i724
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i727 = data
  i726.m_Version = i727[0]
  i726.m_UsePipelineSettings = !!i727[1]
  i726.m_AdditionalLightsShadowResolutionTier = i727[2]
  i726.m_LightLayerMask = i727[3]
  i726.m_RenderingLayers = i727[4]
  i726.m_CustomShadowLayers = !!i727[5]
  i726.m_ShadowLayerMask = i727[6]
  i726.m_ShadowRenderingLayers = i727[7]
  i726.m_LightCookieSize = new pc.Vec2( i727[8], i727[9] )
  i726.m_LightCookieOffset = new pc.Vec2( i727[10], i727[11] )
  i726.m_SoftShadowQuality = i727[12]
  return i726
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i729 = data
  i728.priority = i729[0]
  i728.blendDistance = i729[1]
  i728.weight = i729[2]
  request.r(i729[3], i729[4], 0, i728, 'sharedProfile')
  i728.m_IsGlobal = !!i729[5]
  return i728
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'm_FirstSelected')
  i730.m_sendNavigationEvents = !!i731[2]
  i730.m_DragThreshold = i731[3]
  return i730
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i733 = data
  i732.m_HorizontalAxis = i733[0]
  i732.m_VerticalAxis = i733[1]
  i732.m_SubmitButton = i733[2]
  i732.m_CancelButton = i733[3]
  i732.m_InputActionsPerSecond = i733[4]
  i732.m_RepeatDelay = i733[5]
  i732.m_ForceModuleActive = !!i733[6]
  i732.m_SendPointerHoverToParent = !!i733[7]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i735 = data
  i734.enabled = !!i735[0]
  i734.planeDistance = i735[1]
  i734.referencePixelsPerUnit = i735[2]
  i734.isFallbackOverlay = !!i735[3]
  i734.renderMode = i735[4]
  i734.renderOrder = i735[5]
  i734.sortingLayerName = i735[6]
  i734.sortingOrder = i735[7]
  i734.scaleFactor = i735[8]
  request.r(i735[9], i735[10], 0, i734, 'worldCamera')
  i734.overrideSorting = !!i735[11]
  i734.pixelPerfect = !!i735[12]
  i734.targetDisplay = i735[13]
  i734.overridePixelPerfect = !!i735[14]
  return i734
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i737 = data
  i736.m_UiScaleMode = i737[0]
  i736.m_ReferencePixelsPerUnit = i737[1]
  i736.m_ScaleFactor = i737[2]
  i736.m_ReferenceResolution = new pc.Vec2( i737[3], i737[4] )
  i736.m_ScreenMatchMode = i737[5]
  i736.m_MatchWidthOrHeight = i737[6]
  i736.m_PhysicalUnit = i737[7]
  i736.m_FallbackScreenDPI = i737[8]
  i736.m_DefaultSpriteDPI = i737[9]
  i736.m_DynamicPixelsPerUnit = i737[10]
  i736.m_PresetInfoIsWorld = !!i737[11]
  return i736
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i739 = data
  i738.m_IgnoreReversedGraphics = !!i739[0]
  i738.m_BlockingObjects = i739[1]
  i738.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i739[2] )
  return i738
}

Deserializers["TextHint"] = function (request, data, root) {
  var i740 = root || request.c( 'TextHint' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'hintText')
  i740.scaleAmount = i741[2]
  i740.duration = i741[3]
  return i740
}

Deserializers["TimerSlider"] = function (request, data, root) {
  var i742 = root || request.c( 'TimerSlider' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'timerSlider')
  i742.totalTime = i743[2]
  return i742
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i744 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i745 = data
  i744.m_hasFontAssetChanged = !!i745[0]
  request.r(i745[1], i745[2], 0, i744, 'm_baseMaterial')
  i744.m_maskOffset = new pc.Vec4( i745[3], i745[4], i745[5], i745[6] )
  i744.m_text = i745[7]
  i744.m_isRightToLeft = !!i745[8]
  request.r(i745[9], i745[10], 0, i744, 'm_fontAsset')
  request.r(i745[11], i745[12], 0, i744, 'm_sharedMaterial')
  var i747 = i745[13]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i744.m_fontSharedMaterials = i746
  request.r(i745[14], i745[15], 0, i744, 'm_fontMaterial')
  var i749 = i745[16]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i744.m_fontMaterials = i748
  i744.m_fontColor32 = UnityEngine.Color32.ConstructColor(i745[17], i745[18], i745[19], i745[20])
  i744.m_fontColor = new pc.Color(i745[21], i745[22], i745[23], i745[24])
  i744.m_enableVertexGradient = !!i745[25]
  i744.m_colorMode = i745[26]
  i744.m_fontColorGradient = request.d('TMPro.VertexGradient', i745[27], i744.m_fontColorGradient)
  request.r(i745[28], i745[29], 0, i744, 'm_fontColorGradientPreset')
  request.r(i745[30], i745[31], 0, i744, 'm_spriteAsset')
  i744.m_tintAllSprites = !!i745[32]
  request.r(i745[33], i745[34], 0, i744, 'm_StyleSheet')
  i744.m_TextStyleHashCode = i745[35]
  i744.m_overrideHtmlColors = !!i745[36]
  i744.m_faceColor = UnityEngine.Color32.ConstructColor(i745[37], i745[38], i745[39], i745[40])
  i744.m_fontSize = i745[41]
  i744.m_fontSizeBase = i745[42]
  i744.m_fontWeight = i745[43]
  i744.m_enableAutoSizing = !!i745[44]
  i744.m_fontSizeMin = i745[45]
  i744.m_fontSizeMax = i745[46]
  i744.m_fontStyle = i745[47]
  i744.m_HorizontalAlignment = i745[48]
  i744.m_VerticalAlignment = i745[49]
  i744.m_textAlignment = i745[50]
  i744.m_characterSpacing = i745[51]
  i744.m_wordSpacing = i745[52]
  i744.m_lineSpacing = i745[53]
  i744.m_lineSpacingMax = i745[54]
  i744.m_paragraphSpacing = i745[55]
  i744.m_charWidthMaxAdj = i745[56]
  i744.m_enableWordWrapping = !!i745[57]
  i744.m_wordWrappingRatios = i745[58]
  i744.m_overflowMode = i745[59]
  request.r(i745[60], i745[61], 0, i744, 'm_linkedTextComponent')
  request.r(i745[62], i745[63], 0, i744, 'parentLinkedComponent')
  i744.m_enableKerning = !!i745[64]
  i744.m_enableExtraPadding = !!i745[65]
  i744.checkPaddingRequired = !!i745[66]
  i744.m_isRichText = !!i745[67]
  i744.m_parseCtrlCharacters = !!i745[68]
  i744.m_isOrthographic = !!i745[69]
  i744.m_isCullingEnabled = !!i745[70]
  i744.m_horizontalMapping = i745[71]
  i744.m_verticalMapping = i745[72]
  i744.m_uvLineOffset = i745[73]
  i744.m_geometrySortingOrder = i745[74]
  i744.m_IsTextObjectScaleStatic = !!i745[75]
  i744.m_VertexBufferAutoSizeReduction = !!i745[76]
  i744.m_useMaxVisibleDescender = !!i745[77]
  i744.m_pageToDisplay = i745[78]
  i744.m_margin = new pc.Vec4( i745[79], i745[80], i745[81], i745[82] )
  i744.m_isUsingLegacyAnimationComponent = !!i745[83]
  i744.m_isVolumetricText = !!i745[84]
  request.r(i745[85], i745[86], 0, i744, 'm_Material')
  i744.m_Maskable = !!i745[87]
  i744.m_Color = new pc.Color(i745[88], i745[89], i745[90], i745[91])
  i744.m_RaycastTarget = !!i745[92]
  i744.m_RaycastPadding = new pc.Vec4( i745[93], i745[94], i745[95], i745[96] )
  return i744
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i750 = root || request.c( 'TMPro.VertexGradient' )
  var i751 = data
  i750.topLeft = new pc.Color(i751[0], i751[1], i751[2], i751[3])
  i750.topRight = new pc.Color(i751[4], i751[5], i751[6], i751[7])
  i750.bottomLeft = new pc.Color(i751[8], i751[9], i751[10], i751[11])
  i750.bottomRight = new pc.Color(i751[12], i751[13], i751[14], i751[15])
  return i750
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Slider' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'm_FillRect')
  request.r(i753[2], i753[3], 0, i752, 'm_HandleRect')
  i752.m_Direction = i753[4]
  i752.m_MinValue = i753[5]
  i752.m_MaxValue = i753[6]
  i752.m_WholeNumbers = !!i753[7]
  i752.m_Value = i753[8]
  i752.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i753[9], i752.m_OnValueChanged)
  i752.m_Navigation = request.d('UnityEngine.UI.Navigation', i753[10], i752.m_Navigation)
  i752.m_Transition = i753[11]
  i752.m_Colors = request.d('UnityEngine.UI.ColorBlock', i753[12], i752.m_Colors)
  i752.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i753[13], i752.m_SpriteState)
  i752.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i753[14], i752.m_AnimationTriggers)
  i752.m_Interactable = !!i753[15]
  request.r(i753[16], i753[17], 0, i752, 'm_TargetGraphic')
  return i752
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i755 = data
  i754.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i755[0], i754.m_PersistentCalls)
  return i754
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i757 = data
  var i759 = i757[0]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(request.d('UnityEngine.Events.PersistentCall', i759[i + 0]));
  }
  i756.m_Calls = i758
  return i756
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'm_Target')
  i762.m_TargetAssemblyTypeName = i763[2]
  i762.m_MethodName = i763[3]
  i762.m_Mode = i763[4]
  i762.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i763[5], i762.m_Arguments)
  i762.m_CallState = i763[6]
  return i762
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i765 = data
  i764.m_Mode = i765[0]
  i764.m_WrapAround = !!i765[1]
  request.r(i765[2], i765[3], 0, i764, 'm_SelectOnUp')
  request.r(i765[4], i765[5], 0, i764, 'm_SelectOnDown')
  request.r(i765[6], i765[7], 0, i764, 'm_SelectOnLeft')
  request.r(i765[8], i765[9], 0, i764, 'm_SelectOnRight')
  return i764
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i767 = data
  i766.m_NormalColor = new pc.Color(i767[0], i767[1], i767[2], i767[3])
  i766.m_HighlightedColor = new pc.Color(i767[4], i767[5], i767[6], i767[7])
  i766.m_PressedColor = new pc.Color(i767[8], i767[9], i767[10], i767[11])
  i766.m_SelectedColor = new pc.Color(i767[12], i767[13], i767[14], i767[15])
  i766.m_DisabledColor = new pc.Color(i767[16], i767[17], i767[18], i767[19])
  i766.m_ColorMultiplier = i767[20]
  i766.m_FadeDuration = i767[21]
  return i766
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'm_HighlightedSprite')
  request.r(i769[2], i769[3], 0, i768, 'm_PressedSprite')
  request.r(i769[4], i769[5], 0, i768, 'm_SelectedSprite')
  request.r(i769[6], i769[7], 0, i768, 'm_DisabledSprite')
  return i768
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i771 = data
  i770.m_NormalTrigger = i771[0]
  i770.m_HighlightedTrigger = i771[1]
  i770.m_PressedTrigger = i771[2]
  i770.m_SelectedTrigger = i771[3]
  i770.m_DisabledTrigger = i771[4]
  return i770
}

Deserializers["GameManager"] = function (request, data, root) {
  var i772 = root || request.c( 'GameManager' )
  var i773 = data
  var i775 = i773[0]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.itemPrefabs = i774
  request.r(i773[1], i773[2], 0, i772, 'gridParent')
  var i777 = i773[3]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i772.goodEffectPrefabs = i776
  request.r(i773[4], i773[5], 0, i772, 'uiCanvas')
  i772.swapDuration = i773[6]
  i772.destroyDuration = i773[7]
  i772.refillDuration = i773[8]
  i772.shuffleDuration = i773[9]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i781 = data
  i780.ambientIntensity = i781[0]
  i780.reflectionIntensity = i781[1]
  i780.ambientMode = i781[2]
  i780.ambientLight = new pc.Color(i781[3], i781[4], i781[5], i781[6])
  i780.ambientSkyColor = new pc.Color(i781[7], i781[8], i781[9], i781[10])
  i780.ambientGroundColor = new pc.Color(i781[11], i781[12], i781[13], i781[14])
  i780.ambientEquatorColor = new pc.Color(i781[15], i781[16], i781[17], i781[18])
  i780.fogColor = new pc.Color(i781[19], i781[20], i781[21], i781[22])
  i780.fogEndDistance = i781[23]
  i780.fogStartDistance = i781[24]
  i780.fogDensity = i781[25]
  i780.fog = !!i781[26]
  request.r(i781[27], i781[28], 0, i780, 'skybox')
  i780.fogMode = i781[29]
  var i783 = i781[30]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i783[i + 0]) );
  }
  i780.lightmaps = i782
  i780.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i781[31], i780.lightProbes)
  i780.lightmapsMode = i781[32]
  i780.mixedBakeMode = i781[33]
  i780.environmentLightingMode = i781[34]
  i780.ambientProbe = new pc.SphericalHarmonicsL2(i781[35])
  i780.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i781[36])
  i780.useReferenceAmbientProbe = !!i781[37]
  request.r(i781[38], i781[39], 0, i780, 'customReflection')
  request.r(i781[40], i781[41], 0, i780, 'defaultReflection')
  i780.defaultReflectionMode = i781[42]
  i780.defaultReflectionResolution = i781[43]
  i780.sunLightObjectId = i781[44]
  i780.pixelLightCount = i781[45]
  i780.defaultReflectionHDR = !!i781[46]
  i780.hasLightDataAsset = !!i781[47]
  i780.hasManualGenerate = !!i781[48]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'lightmapColor')
  request.r(i787[2], i787[3], 0, i786, 'lightmapDirection')
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i788 = root || new UnityEngine.LightProbes()
  var i789 = data
  return i788
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'panelPrefab')
  var i799 = i797[2]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i799[i + 0]));
  }
  i796.prefabs = i798
  return i796
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i803 = data
  i802.type = i803[0]
  request.r(i803[1], i803[2], 0, i802, 'prefab')
  return i802
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i805 = data
  i804.m_Spacing = i805[0]
  i804.m_ChildForceExpandWidth = !!i805[1]
  i804.m_ChildForceExpandHeight = !!i805[2]
  i804.m_ChildControlWidth = !!i805[3]
  i804.m_ChildControlHeight = !!i805[4]
  i804.m_ChildScaleWidth = !!i805[5]
  i804.m_ChildScaleHeight = !!i805[6]
  i804.m_ReverseArrangement = !!i805[7]
  i804.m_Padding = UnityEngine.RectOffset.FromPaddings(i805[8], i805[9], i805[10], i805[11])
  i804.m_ChildAlignment = i805[12]
  return i804
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i807 = data
  i806.m_HorizontalFit = i807[0]
  i806.m_VerticalFit = i807[1]
  return i806
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'contentHolder')
  return i808
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'nameLabel')
  request.r(i811[2], i811[3], 0, i810, 'scrollRect')
  request.r(i811[4], i811[5], 0, i810, 'viewport')
  request.r(i811[6], i811[7], 0, i810, 'Canvas')
  return i810
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i813 = data
  i812.m_IgnoreLayout = !!i813[0]
  i812.m_MinWidth = i813[1]
  i812.m_MinHeight = i813[2]
  i812.m_PreferredWidth = i813[3]
  i812.m_PreferredHeight = i813[4]
  i812.m_FlexibleWidth = i813[5]
  i812.m_FlexibleHeight = i813[6]
  i812.m_LayoutPriority = i813[7]
  return i812
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.Button' )
  var i815 = data
  i814.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i815[0], i814.m_OnClick)
  i814.m_Navigation = request.d('UnityEngine.UI.Navigation', i815[1], i814.m_Navigation)
  i814.m_Transition = i815[2]
  i814.m_Colors = request.d('UnityEngine.UI.ColorBlock', i815[3], i814.m_Colors)
  i814.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i815[4], i814.m_SpriteState)
  i814.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i815[5], i814.m_AnimationTriggers)
  i814.m_Interactable = !!i815[6]
  request.r(i815[7], i815[8], 0, i814, 'm_TargetGraphic')
  return i814
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i817 = data
  i816.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i817[0], i816.m_PersistentCalls)
  return i816
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'm_ObjectArgument')
  i818.m_ObjectArgumentAssemblyTypeName = i819[2]
  i818.m_IntArgument = i819[3]
  i818.m_FloatArgument = i819[4]
  i818.m_StringArgument = i819[5]
  i818.m_BoolArgument = !!i819[6]
  return i818
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.Text' )
  var i821 = data
  i820.m_FontData = request.d('UnityEngine.UI.FontData', i821[0], i820.m_FontData)
  i820.m_Text = i821[1]
  request.r(i821[2], i821[3], 0, i820, 'm_Material')
  i820.m_Maskable = !!i821[4]
  i820.m_Color = new pc.Color(i821[5], i821[6], i821[7], i821[8])
  i820.m_RaycastTarget = !!i821[9]
  i820.m_RaycastPadding = new pc.Vec4( i821[10], i821[11], i821[12], i821[13] )
  return i820
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.FontData' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'm_Font')
  i822.m_FontSize = i823[2]
  i822.m_FontStyle = i823[3]
  i822.m_BestFit = !!i823[4]
  i822.m_MinSize = i823[5]
  i822.m_MaxSize = i823[6]
  i822.m_Alignment = i823[7]
  i822.m_AlignByGeometry = !!i823[8]
  i822.m_RichText = !!i823[9]
  i822.m_HorizontalOverflow = i823[10]
  i822.m_VerticalOverflow = i823[11]
  i822.m_LineSpacing = i823[12]
  return i822
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'm_Content')
  i824.m_Horizontal = !!i825[2]
  i824.m_Vertical = !!i825[3]
  i824.m_MovementType = i825[4]
  i824.m_Elasticity = i825[5]
  i824.m_Inertia = !!i825[6]
  i824.m_DecelerationRate = i825[7]
  i824.m_ScrollSensitivity = i825[8]
  request.r(i825[9], i825[10], 0, i824, 'm_Viewport')
  request.r(i825[11], i825[12], 0, i824, 'm_HorizontalScrollbar')
  request.r(i825[13], i825[14], 0, i824, 'm_VerticalScrollbar')
  i824.m_HorizontalScrollbarVisibility = i825[15]
  i824.m_VerticalScrollbarVisibility = i825[16]
  i824.m_HorizontalScrollbarSpacing = i825[17]
  i824.m_VerticalScrollbarSpacing = i825[18]
  i824.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i825[19], i824.m_OnValueChanged)
  return i824
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i827 = data
  i826.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i827[0], i826.m_PersistentCalls)
  return i826
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.Mask' )
  var i829 = data
  i828.m_ShowMaskGraphic = !!i829[0]
  return i828
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'm_HandleRect')
  i830.m_Direction = i831[2]
  i830.m_Value = i831[3]
  i830.m_Size = i831[4]
  i830.m_NumberOfSteps = i831[5]
  i830.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i831[6], i830.m_OnValueChanged)
  i830.m_Navigation = request.d('UnityEngine.UI.Navigation', i831[7], i830.m_Navigation)
  i830.m_Transition = i831[8]
  i830.m_Colors = request.d('UnityEngine.UI.ColorBlock', i831[9], i830.m_Colors)
  i830.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i831[10], i830.m_SpriteState)
  i830.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i831[11], i830.m_AnimationTriggers)
  i830.m_Interactable = !!i831[12]
  request.r(i831[13], i831[14], 0, i830, 'm_TargetGraphic')
  return i830
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i833 = data
  i832.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i833[0], i832.m_PersistentCalls)
  return i832
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i835 = data
  var i837 = i835[0]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i837.length; i += 1) {
    i836.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i837[i + 0]));
  }
  i834.m_Delegates = i836
  return i834
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i841 = data
  i840.eventID = i841[0]
  i840.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i841[1], i840.callback)
  return i840
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i843 = data
  i842.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i843[0], i842.m_PersistentCalls)
  return i842
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'nameLabel')
  request.r(i845[2], i845[3], 0, i844, 'valueLabel')
  i844.colorDefault = new pc.Color(i845[4], i845[5], i845[6], i845[7])
  i844.colorSelected = new pc.Color(i845[8], i845[9], i845[10], i845[11])
  return i844
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'nameLabel')
  request.r(i847[2], i847[3], 0, i846, 'valueToggle')
  request.r(i847[4], i847[5], 0, i846, 'checkmarkImage')
  i846.colorDefault = new pc.Color(i847[6], i847[7], i847[8], i847[9])
  i846.colorSelected = new pc.Color(i847[10], i847[11], i847[12], i847[13])
  return i846
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i849 = data
  i848.toggleTransition = i849[0]
  request.r(i849[1], i849[2], 0, i848, 'graphic')
  i848.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i849[3], i848.onValueChanged)
  request.r(i849[4], i849[5], 0, i848, 'm_Group')
  i848.m_IsOn = !!i849[6]
  i848.m_Navigation = request.d('UnityEngine.UI.Navigation', i849[7], i848.m_Navigation)
  i848.m_Transition = i849[8]
  i848.m_Colors = request.d('UnityEngine.UI.ColorBlock', i849[9], i848.m_Colors)
  i848.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i849[10], i848.m_SpriteState)
  i848.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i849[11], i848.m_AnimationTriggers)
  i848.m_Interactable = !!i849[12]
  request.r(i849[13], i849[14], 0, i848, 'm_TargetGraphic')
  return i848
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i851 = data
  i850.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i851[0], i850.m_PersistentCalls)
  return i850
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'nameLabel')
  request.r(i853[2], i853[3], 0, i852, 'valueLabel')
  i852.colorDefault = new pc.Color(i853[4], i853[5], i853[6], i853[7])
  i852.colorSelected = new pc.Color(i853[8], i853[9], i853[10], i853[11])
  return i852
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'nameLabel')
  request.r(i855[2], i855[3], 0, i854, 'valueLabel')
  i854.colorDefault = new pc.Color(i855[4], i855[5], i855[6], i855[7])
  i854.colorSelected = new pc.Color(i855[8], i855[9], i855[10], i855[11])
  return i854
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'nameLabel')
  request.r(i857[2], i857[3], 0, i856, 'valueLabel')
  i856.colorDefault = new pc.Color(i857[4], i857[5], i857[6], i857[7])
  i856.colorSelected = new pc.Color(i857[8], i857[9], i857[10], i857[11])
  return i856
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'nextButtonText')
  request.r(i859[2], i859[3], 0, i858, 'previousButtonText')
  request.r(i859[4], i859[5], 0, i858, 'nameLabel')
  request.r(i859[6], i859[7], 0, i858, 'valueLabel')
  i858.colorDefault = new pc.Color(i859[8], i859[9], i859[10], i859[11])
  i858.colorSelected = new pc.Color(i859[12], i859[13], i859[14], i859[15])
  return i858
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'nameLabel')
  i860.colorDefault = new pc.Color(i861[2], i861[3], i861[4], i861[5])
  i860.colorSelected = new pc.Color(i861[6], i861[7], i861[8], i861[9])
  return i860
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'nameLabel')
  request.r(i863[2], i863[3], 0, i862, 'valueToggle')
  i862.colorDefault = new pc.Color(i863[4], i863[5], i863[6], i863[7])
  i862.colorSelected = new pc.Color(i863[8], i863[9], i863[10], i863[11])
  return i862
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i865 = data
  i864.toggleTransition = i865[0]
  request.r(i865[1], i865[2], 0, i864, 'graphic')
  i864.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i865[3], i864.onValueChanged)
  request.r(i865[4], i865[5], 0, i864, 'content')
  request.r(i865[6], i865[7], 0, i864, 'arrowOpened')
  request.r(i865[8], i865[9], 0, i864, 'arrowClosed')
  request.r(i865[10], i865[11], 0, i864, 'm_Group')
  i864.m_IsOn = !!i865[12]
  i864.m_Navigation = request.d('UnityEngine.UI.Navigation', i865[13], i864.m_Navigation)
  i864.m_Transition = i865[14]
  i864.m_Colors = request.d('UnityEngine.UI.ColorBlock', i865[15], i864.m_Colors)
  i864.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i865[16], i864.m_SpriteState)
  i864.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i865[17], i864.m_AnimationTriggers)
  i864.m_Interactable = !!i865[18]
  request.r(i865[19], i865[20], 0, i864, 'm_TargetGraphic')
  return i864
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'nameLabel')
  request.r(i867[2], i867[3], 0, i866, 'valueToggle')
  request.r(i867[4], i867[5], 0, i866, 'colorImage')
  request.r(i867[6], i867[7], 0, i866, 'fieldR')
  request.r(i867[8], i867[9], 0, i866, 'fieldG')
  request.r(i867[10], i867[11], 0, i866, 'fieldB')
  request.r(i867[12], i867[13], 0, i866, 'fieldA')
  i866.colorDefault = new pc.Color(i867[14], i867[15], i867[16], i867[17])
  i866.colorSelected = new pc.Color(i867[18], i867[19], i867[20], i867[21])
  return i866
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'nameLabel')
  request.r(i869[2], i869[3], 0, i868, 'valueLabel')
  i868.colorDefault = new pc.Color(i869[4], i869[5], i869[6], i869[7])
  i868.colorSelected = new pc.Color(i869[8], i869[9], i869[10], i869[11])
  return i868
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'nameLabel')
  request.r(i871[2], i871[3], 0, i870, 'valueToggle')
  request.r(i871[4], i871[5], 0, i870, 'fieldX')
  request.r(i871[6], i871[7], 0, i870, 'fieldY')
  i870.colorDefault = new pc.Color(i871[8], i871[9], i871[10], i871[11])
  i870.colorSelected = new pc.Color(i871[12], i871[13], i871[14], i871[15])
  return i870
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'nameLabel')
  request.r(i873[2], i873[3], 0, i872, 'valueToggle')
  request.r(i873[4], i873[5], 0, i872, 'fieldX')
  request.r(i873[6], i873[7], 0, i872, 'fieldY')
  request.r(i873[8], i873[9], 0, i872, 'fieldZ')
  i872.colorDefault = new pc.Color(i873[10], i873[11], i873[12], i873[13])
  i872.colorSelected = new pc.Color(i873[14], i873[15], i873[16], i873[17])
  return i872
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'nameLabel')
  request.r(i875[2], i875[3], 0, i874, 'valueToggle')
  request.r(i875[4], i875[5], 0, i874, 'fieldX')
  request.r(i875[6], i875[7], 0, i874, 'fieldY')
  request.r(i875[8], i875[9], 0, i874, 'fieldZ')
  request.r(i875[10], i875[11], 0, i874, 'fieldW')
  i874.colorDefault = new pc.Color(i875[12], i875[13], i875[14], i875[15])
  i874.colorSelected = new pc.Color(i875[16], i875[17], i875[18], i875[19])
  return i874
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i877 = data
  i876.colorDefault = new pc.Color(i877[0], i877[1], i877[2], i877[3])
  i876.colorSelected = new pc.Color(i877[4], i877[5], i877[6], i877[7])
  return i876
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i879 = data
  i878.m_Spacing = i879[0]
  i878.m_ChildForceExpandWidth = !!i879[1]
  i878.m_ChildForceExpandHeight = !!i879[2]
  i878.m_ChildControlWidth = !!i879[3]
  i878.m_ChildControlHeight = !!i879[4]
  i878.m_ChildScaleWidth = !!i879[5]
  i878.m_ChildScaleHeight = !!i879[6]
  i878.m_ReverseArrangement = !!i879[7]
  i878.m_Padding = UnityEngine.RectOffset.FromPaddings(i879[8], i879[9], i879[10], i879[11])
  i878.m_ChildAlignment = i879[12]
  return i878
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i881 = data
  i880.colorDefault = new pc.Color(i881[0], i881[1], i881[2], i881[3])
  i880.colorSelected = new pc.Color(i881[4], i881[5], i881[6], i881[7])
  return i880
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'nameLabel')
  request.r(i883[2], i883[3], 0, i882, 'header')
  i882.colorDefault = new pc.Color(i883[4], i883[5], i883[6], i883[7])
  i882.colorSelected = new pc.Color(i883[8], i883[9], i883[10], i883[11])
  return i882
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'nameLabel')
  request.r(i885[2], i885[3], 0, i884, 'valueToggle')
  var i887 = i885[4]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 1, i886, '')
  }
  i884.toggles = i886
  i884.colorDefault = new pc.Color(i885[5], i885[6], i885[7], i885[8])
  i884.colorSelected = new pc.Color(i885[9], i885[10], i885[11], i885[12])
  return i884
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'nameLabel')
  request.r(i891[2], i891[3], 0, i890, 'valueToggle')
  request.r(i891[4], i891[5], 0, i890, 'checkmarkImage')
  i890.colorDefault = new pc.Color(i891[6], i891[7], i891[8], i891[9])
  i890.colorSelected = new pc.Color(i891[10], i891[11], i891[12], i891[13])
  return i890
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'nameLabel')
  request.r(i893[2], i893[3], 0, i892, 'valueToggle')
  request.r(i893[4], i893[5], 0, i892, 'checkmarkImage')
  i892.colorDefault = new pc.Color(i893[6], i893[7], i893[8], i893[9])
  i892.colorSelected = new pc.Color(i893[10], i893[11], i893[12], i893[13])
  return i892
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'nextButtonText')
  request.r(i895[2], i895[3], 0, i894, 'previousButtonText')
  request.r(i895[4], i895[5], 0, i894, 'nameLabel')
  request.r(i895[6], i895[7], 0, i894, 'valueLabel')
  i894.colorDefault = new pc.Color(i895[8], i895[9], i895[10], i895[11])
  i894.colorSelected = new pc.Color(i895[12], i895[13], i895[14], i895[15])
  return i894
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'nameLabel')
  request.r(i897[2], i897[3], 0, i896, 'valueToggle')
  i896.colorDefault = new pc.Color(i897[4], i897[5], i897[6], i897[7])
  i896.colorSelected = new pc.Color(i897[8], i897[9], i897[10], i897[11])
  return i896
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'nameLabel')
  i898.colorDefault = new pc.Color(i899[2], i899[3], i899[4], i899[5])
  i898.colorSelected = new pc.Color(i899[6], i899[7], i899[8], i899[9])
  return i898
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'nameLabel')
  request.r(i901[2], i901[3], 0, i900, 'valueLabel')
  request.r(i901[4], i901[5], 0, i900, 'progressBarRect')
  i900.colorDefault = new pc.Color(i901[6], i901[7], i901[8], i901[9])
  i900.colorSelected = new pc.Color(i901[10], i901[11], i901[12], i901[13])
  return i900
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'nameLabel')
  request.r(i903[2], i903[3], 0, i902, 'valueLabel')
  i902.colorDefault = new pc.Color(i903[4], i903[5], i903[6], i903[7])
  i902.colorSelected = new pc.Color(i903[8], i903[9], i903[10], i903[11])
  return i902
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'nameLabel')
  request.r(i905[2], i905[3], 0, i904, 'valueLabel')
  i904.colorDefault = new pc.Color(i905[4], i905[5], i905[6], i905[7])
  i904.colorSelected = new pc.Color(i905[8], i905[9], i905[10], i905[11])
  return i904
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'nextButtonText')
  request.r(i907[2], i907[3], 0, i906, 'previousButtonText')
  request.r(i907[4], i907[5], 0, i906, 'nameLabel')
  request.r(i907[6], i907[7], 0, i906, 'valueLabel')
  i906.colorDefault = new pc.Color(i907[8], i907[9], i907[10], i907[11])
  i906.colorSelected = new pc.Color(i907[12], i907[13], i907[14], i907[15])
  return i906
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'nextButtonText')
  request.r(i909[2], i909[3], 0, i908, 'previousButtonText')
  request.r(i909[4], i909[5], 0, i908, 'nameLabel')
  request.r(i909[6], i909[7], 0, i908, 'valueLabel')
  i908.colorDefault = new pc.Color(i909[8], i909[9], i909[10], i909[11])
  i908.colorSelected = new pc.Color(i909[12], i909[13], i909[14], i909[15])
  return i908
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'panel')
  request.r(i911[2], i911[3], 0, i910, 'valuePrefab')
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i913 = data
  i912.AdditionalLightsPerObjectLimit = i913[0]
  i912.AdditionalLightsRenderingMode = i913[1]
  i912.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i913[2], i912.LightRenderingMode)
  i912.ColorGradingLutSize = i913[3]
  i912.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i913[4], i912.ColorGradingMode)
  i912.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i913[5], i912.MainLightRenderingMode)
  i912.MainLightRenderingModeValue = i913[6]
  i912.SupportsMainLightShadows = !!i913[7]
  i912.MixedLightingSupported = !!i913[8]
  i912.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i913[9], i912.MsaaQuality)
  i912.MSAA = i913[10]
  i912.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i913[11], i912.OpaqueDownsampling)
  i912.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i913[12], i912.MainLightShadowmapResolution)
  i912.MainLightShadowmapResolutionValue = i913[13]
  i912.SupportsSoftShadows = !!i913[14]
  i912.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i913[15], i912.SoftShadowQuality)
  i912.SoftShadowQualityValue = i913[16]
  i912.ShadowDistance = i913[17]
  i912.ShadowCascadeCount = i913[18]
  i912.Cascade2Split = i913[19]
  i912.Cascade3Split = new pc.Vec2( i913[20], i913[21] )
  i912.Cascade4Split = new pc.Vec3( i913[22], i913[23], i913[24] )
  i912.CascadeBorder = i913[25]
  i912.ShadowDepthBias = i913[26]
  i912.ShadowNormalBias = i913[27]
  i912.RenderScale = i913[28]
  i912.RequireDepthTexture = !!i913[29]
  i912.RequireOpaqueTexture = !!i913[30]
  i912.SupportsHDR = !!i913[31]
  i912.SupportsTerrainHoles = !!i913[32]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i915 = data
  i914.Disabled = i915[0]
  i914.PerVertex = i915[1]
  i914.PerPixel = i915[2]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i917 = data
  i916.LowDynamicRange = i917[0]
  i916.HighDynamicRange = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i919 = data
  i918.Disabled = i919[0]
  i918._2x = i919[1]
  i918._4x = i919[2]
  i918._8x = i919[3]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i921 = data
  i920.None = i921[0]
  i920._2xBilinear = i921[1]
  i920._4xBox = i921[2]
  i920._4xBilinear = i921[3]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i923 = data
  i922._256 = i923[0]
  i922._512 = i923[1]
  i922._1024 = i923[2]
  i922._2048 = i923[3]
  i922._4096 = i923[4]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i925 = data
  i924.UsePipelineSettings = i925[0]
  i924.Low = i925[1]
  i924.Medium = i925[2]
  i924.High = i925[3]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i927 = data
  var i929 = i927[0]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i929[i + 0]));
  }
  i926.ShaderCompilationErrors = i928
  i926.name = i927[1]
  i926.guid = i927[2]
  var i931 = i927[3]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( i931[i + 0] );
  }
  i926.shaderDefinedKeywords = i930
  var i933 = i927[4]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i933[i + 0]) );
  }
  i926.passes = i932
  var i935 = i927[5]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i935[i + 0]) );
  }
  i926.usePasses = i934
  var i937 = i927[6]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i937[i + 0]) );
  }
  i926.defaultParameterValues = i936
  request.r(i927[7], i927[8], 0, i926, 'unityFallbackShader')
  i926.readDepth = !!i927[9]
  i926.isCreatedByShaderGraph = !!i927[10]
  i926.compiled = !!i927[11]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i941 = data
  i940.shaderName = i941[0]
  i940.errorMessage = i941[1]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i946 = root || new pc.UnityShaderPass()
  var i947 = data
  i946.id = i947[0]
  i946.subShaderIndex = i947[1]
  i946.name = i947[2]
  i946.passType = i947[3]
  i946.grabPassTextureName = i947[4]
  i946.usePass = !!i947[5]
  i946.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[6], i946.zTest)
  i946.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[7], i946.zWrite)
  i946.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[8], i946.culling)
  i946.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i947[9], i946.blending)
  i946.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i947[10], i946.alphaBlending)
  i946.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[11], i946.colorWriteMask)
  i946.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[12], i946.offsetUnits)
  i946.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[13], i946.offsetFactor)
  i946.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[14], i946.stencilRef)
  i946.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[15], i946.stencilReadMask)
  i946.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i947[16], i946.stencilWriteMask)
  i946.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i947[17], i946.stencilOp)
  i946.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i947[18], i946.stencilOpFront)
  i946.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i947[19], i946.stencilOpBack)
  var i949 = i947[20]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i949[i + 0]) );
  }
  i946.tags = i948
  var i951 = i947[21]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i946.passDefinedKeywords = i950
  var i953 = i947[22]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i953[i + 0]) );
  }
  i946.passDefinedKeywordGroups = i952
  var i955 = i947[23]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i955[i + 0]) );
  }
  i946.variants = i954
  var i957 = i947[24]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i957[i + 0]) );
  }
  i946.excludedVariants = i956
  i946.hasDepthReader = !!i947[25]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i959 = data
  i958.val = i959[0]
  i958.name = i959[1]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i961 = data
  i960.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[0], i960.src)
  i960.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[1], i960.dst)
  i960.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i961[2], i960.op)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i963 = data
  i962.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i963[0], i962.pass)
  i962.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i963[1], i962.fail)
  i962.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i963[2], i962.zFail)
  i962.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i963[3], i962.comp)
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i967 = data
  i966.name = i967[0]
  i966.value = i967[1]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i971 = data
  var i973 = i971[0]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( i973[i + 0] );
  }
  i970.keywords = i972
  i970.hasDiscard = !!i971[1]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i977 = data
  i976.passId = i977[0]
  i976.subShaderIndex = i977[1]
  var i979 = i977[2]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( i979[i + 0] );
  }
  i976.keywords = i978
  i976.vertexProgram = i977[3]
  i976.fragmentProgram = i977[4]
  i976.exportedForWebGl2 = !!i977[5]
  i976.readDepth = !!i977[6]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'shader')
  i982.pass = i983[2]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i987 = data
  i986.name = i987[0]
  i986.type = i987[1]
  i986.value = new pc.Vec4( i987[2], i987[3], i987[4], i987[5] )
  i986.textureValue = i987[6]
  i986.shaderPropertyFlag = i987[7]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i989 = data
  i988.name = i989[0]
  request.r(i989[1], i989[2], 0, i988, 'texture')
  i988.aabb = i989[3]
  i988.vertices = i989[4]
  i988.triangles = i989[5]
  i988.textureRect = UnityEngine.Rect.MinMaxRect(i989[6], i989[7], i989[8], i989[9])
  i988.packedRect = UnityEngine.Rect.MinMaxRect(i989[10], i989[11], i989[12], i989[13])
  i988.border = new pc.Vec4( i989[14], i989[15], i989[16], i989[17] )
  i988.transparency = i989[18]
  i988.bounds = i989[19]
  i988.pixelsPerUnit = i989[20]
  i988.textureWidth = i989[21]
  i988.textureHeight = i989[22]
  i988.nativeSize = new pc.Vec2( i989[23], i989[24] )
  i988.pivot = new pc.Vec2( i989[25], i989[26] )
  i988.textureRectOffset = new pc.Vec2( i989[27], i989[28] )
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i991 = data
  i990.name = i991[0]
  i990.ascent = i991[1]
  i990.originalLineHeight = i991[2]
  i990.fontSize = i991[3]
  var i993 = i991[4]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i993[i + 0]) );
  }
  i990.characterInfo = i992
  request.r(i991[5], i991[6], 0, i990, 'texture')
  i990.originalFontSize = i991[7]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i997 = data
  i996.index = i997[0]
  i996.advance = i997[1]
  i996.bearing = i997[2]
  i996.glyphWidth = i997[3]
  i996.glyphHeight = i997[4]
  i996.minX = i997[5]
  i996.maxX = i997[6]
  i996.minY = i997[7]
  i996.maxY = i997[8]
  i996.uvBottomLeftX = i997[9]
  i996.uvBottomLeftY = i997[10]
  i996.uvBottomRightX = i997[11]
  i996.uvBottomRightY = i997[12]
  i996.uvTopLeftX = i997[13]
  i996.uvTopLeftY = i997[14]
  i996.uvTopRightX = i997[15]
  i996.uvTopRightY = i997[16]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i999 = data
  i998.name = i999[0]
  i998.bytes64 = i999[1]
  i998.data = i999[2]
  return i998
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1001 = data
  var i1003 = i1001[0]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 1, i1002, '')
  }
  i1000.components = i1002
  return i1000
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1007 = data
  i1006.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1007[0], i1006.mode)
  i1006.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1007[1], i1006.neutralHDRRangeReductionMode)
  i1006.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1007[2], i1006.acesPreset)
  i1006.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1007[3], i1006.hueShiftAmount)
  i1006.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1007[4], i1006.detectPaperWhite)
  i1006.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1007[5], i1006.paperWhite)
  i1006.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1007[6], i1006.detectBrightnessLimits)
  i1006.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1007[7], i1006.minNits)
  i1006.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1007[8], i1006.maxNits)
  i1006.active = !!i1007[9]
  return i1006
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1009 = data
  i1008.m_Value = i1009[0]
  i1008.m_OverrideState = !!i1009[1]
  return i1008
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1011 = data
  i1010.m_Value = i1011[0]
  i1010.m_OverrideState = !!i1011[1]
  return i1010
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1013 = data
  i1012.m_Value = i1013[0]
  i1012.m_OverrideState = !!i1013[1]
  return i1012
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1015 = data
  i1014.m_Value = i1015[0]
  i1014.m_OverrideState = !!i1015[1]
  return i1014
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1017 = data
  i1016.m_Value = !!i1017[0]
  i1016.m_OverrideState = !!i1017[1]
  return i1016
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1019 = data
  i1018.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1019[0], i1018.skipIterations)
  i1018.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1019[1], i1018.threshold)
  i1018.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1019[2], i1018.intensity)
  i1018.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1019[3], i1018.scatter)
  i1018.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1019[4], i1018.clamp)
  i1018.tint = request.d('UnityEngine.Rendering.ColorParameter', i1019[5], i1018.tint)
  i1018.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1019[6], i1018.highQualityFiltering)
  i1018.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1019[7], i1018.downscale)
  i1018.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1019[8], i1018.maxIterations)
  i1018.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1019[9], i1018.dirtTexture)
  i1018.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1019[10], i1018.dirtIntensity)
  i1018.active = !!i1019[11]
  return i1018
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1021 = data
  i1020.m_Value = i1021[0]
  i1020.m_OverrideState = !!i1021[1]
  return i1020
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1023 = data
  i1022.m_Value = i1023[0]
  i1022.m_OverrideState = !!i1023[1]
  return i1022
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1025 = data
  i1024.m_Value = new pc.Color(i1025[0], i1025[1], i1025[2], i1025[3])
  i1024.m_OverrideState = !!i1025[4]
  return i1024
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1027 = data
  i1026.m_Value = i1027[0]
  i1026.m_OverrideState = !!i1027[1]
  return i1026
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1029 = data
  i1028.dimension = i1029[0]
  request.r(i1029[1], i1029[2], 0, i1028, 'm_Value')
  i1028.m_OverrideState = !!i1029[3]
  return i1028
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1031 = data
  i1030.color = request.d('UnityEngine.Rendering.ColorParameter', i1031[0], i1030.color)
  i1030.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1031[1], i1030.center)
  i1030.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1031[2], i1030.intensity)
  i1030.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1031[3], i1030.smoothness)
  i1030.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1031[4], i1030.rounded)
  i1030.active = !!i1031[5]
  return i1030
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1033 = data
  i1032.m_Value = new pc.Vec2( i1033[0], i1033[1] )
  i1032.m_OverrideState = !!i1033[2]
  return i1032
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1035 = data
  i1034.hashCode = i1035[0]
  request.r(i1035[1], i1035[2], 0, i1034, 'material')
  i1034.materialHashCode = i1035[3]
  request.r(i1035[4], i1035[5], 0, i1034, 'atlas')
  i1034.normalStyle = i1035[6]
  i1034.normalSpacingOffset = i1035[7]
  i1034.boldStyle = i1035[8]
  i1034.boldSpacing = i1035[9]
  i1034.italicStyle = i1035[10]
  i1034.tabSize = i1035[11]
  i1034.m_Version = i1035[12]
  i1034.m_SourceFontFileGUID = i1035[13]
  request.r(i1035[14], i1035[15], 0, i1034, 'm_SourceFontFile_EditorRef')
  request.r(i1035[16], i1035[17], 0, i1034, 'm_SourceFontFile')
  i1034.m_AtlasPopulationMode = i1035[18]
  i1034.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1035[19], i1034.m_FaceInfo)
  var i1037 = i1035[20]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.add(request.d('UnityEngine.TextCore.Glyph', i1037[i + 0]));
  }
  i1034.m_GlyphTable = i1036
  var i1039 = i1035[21]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.add(request.d('TMPro.TMP_Character', i1039[i + 0]));
  }
  i1034.m_CharacterTable = i1038
  var i1041 = i1035[22]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 2, i1040, '')
  }
  i1034.m_AtlasTextures = i1040
  i1034.m_AtlasTextureIndex = i1035[23]
  i1034.m_IsMultiAtlasTexturesEnabled = !!i1035[24]
  i1034.m_ClearDynamicDataOnBuild = !!i1035[25]
  var i1043 = i1035[26]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.add(request.d('UnityEngine.TextCore.GlyphRect', i1043[i + 0]));
  }
  i1034.m_UsedGlyphRects = i1042
  var i1045 = i1035[27]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.add(request.d('UnityEngine.TextCore.GlyphRect', i1045[i + 0]));
  }
  i1034.m_FreeGlyphRects = i1044
  i1034.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1035[28], i1034.m_fontInfo)
  i1034.m_AtlasWidth = i1035[29]
  i1034.m_AtlasHeight = i1035[30]
  i1034.m_AtlasPadding = i1035[31]
  i1034.m_AtlasRenderMode = i1035[32]
  var i1047 = i1035[33]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.add(request.d('TMPro.TMP_Glyph', i1047[i + 0]));
  }
  i1034.m_glyphInfoList = i1046
  i1034.m_KerningTable = request.d('TMPro.KerningTable', i1035[34], i1034.m_KerningTable)
  i1034.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1035[35], i1034.m_FontFeatureTable)
  var i1049 = i1035[36]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 1, i1048, '')
  }
  i1034.fallbackFontAssets = i1048
  var i1051 = i1035[37]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 1, i1050, '')
  }
  i1034.m_FallbackFontAssetTable = i1050
  i1034.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1035[38], i1034.m_CreationSettings)
  var i1053 = i1035[39]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('TMPro.TMP_FontWeightPair', i1053[i + 0]) );
  }
  i1034.m_FontWeightTable = i1052
  var i1055 = i1035[40]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('TMPro.TMP_FontWeightPair', i1055[i + 0]) );
  }
  i1034.fontWeights = i1054
  return i1034
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1057 = data
  i1056.m_FaceIndex = i1057[0]
  i1056.m_FamilyName = i1057[1]
  i1056.m_StyleName = i1057[2]
  i1056.m_PointSize = i1057[3]
  i1056.m_Scale = i1057[4]
  i1056.m_UnitsPerEM = i1057[5]
  i1056.m_LineHeight = i1057[6]
  i1056.m_AscentLine = i1057[7]
  i1056.m_CapLine = i1057[8]
  i1056.m_MeanLine = i1057[9]
  i1056.m_Baseline = i1057[10]
  i1056.m_DescentLine = i1057[11]
  i1056.m_SuperscriptOffset = i1057[12]
  i1056.m_SuperscriptSize = i1057[13]
  i1056.m_SubscriptOffset = i1057[14]
  i1056.m_SubscriptSize = i1057[15]
  i1056.m_UnderlineOffset = i1057[16]
  i1056.m_UnderlineThickness = i1057[17]
  i1056.m_StrikethroughOffset = i1057[18]
  i1056.m_StrikethroughThickness = i1057[19]
  i1056.m_TabWidth = i1057[20]
  return i1056
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1061 = data
  i1060.m_Index = i1061[0]
  i1060.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1061[1], i1060.m_Metrics)
  i1060.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1061[2], i1060.m_GlyphRect)
  i1060.m_Scale = i1061[3]
  i1060.m_AtlasIndex = i1061[4]
  i1060.m_ClassDefinitionType = i1061[5]
  return i1060
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1063 = data
  i1062.m_Width = i1063[0]
  i1062.m_Height = i1063[1]
  i1062.m_HorizontalBearingX = i1063[2]
  i1062.m_HorizontalBearingY = i1063[3]
  i1062.m_HorizontalAdvance = i1063[4]
  return i1062
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1065 = data
  i1064.m_X = i1065[0]
  i1064.m_Y = i1065[1]
  i1064.m_Width = i1065[2]
  i1064.m_Height = i1065[3]
  return i1064
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_Character' )
  var i1069 = data
  i1068.m_ElementType = i1069[0]
  i1068.m_Unicode = i1069[1]
  i1068.m_GlyphIndex = i1069[2]
  i1068.m_Scale = i1069[3]
  return i1068
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1074 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1075 = data
  i1074.Name = i1075[0]
  i1074.PointSize = i1075[1]
  i1074.Scale = i1075[2]
  i1074.CharacterCount = i1075[3]
  i1074.LineHeight = i1075[4]
  i1074.Baseline = i1075[5]
  i1074.Ascender = i1075[6]
  i1074.CapHeight = i1075[7]
  i1074.Descender = i1075[8]
  i1074.CenterLine = i1075[9]
  i1074.SuperscriptOffset = i1075[10]
  i1074.SubscriptOffset = i1075[11]
  i1074.SubSize = i1075[12]
  i1074.Underline = i1075[13]
  i1074.UnderlineThickness = i1075[14]
  i1074.strikethrough = i1075[15]
  i1074.strikethroughThickness = i1075[16]
  i1074.TabWidth = i1075[17]
  i1074.Padding = i1075[18]
  i1074.AtlasWidth = i1075[19]
  i1074.AtlasHeight = i1075[20]
  return i1074
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1079 = data
  i1078.id = i1079[0]
  i1078.x = i1079[1]
  i1078.y = i1079[2]
  i1078.width = i1079[3]
  i1078.height = i1079[4]
  i1078.xOffset = i1079[5]
  i1078.yOffset = i1079[6]
  i1078.xAdvance = i1079[7]
  i1078.scale = i1079[8]
  return i1078
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1080 = root || request.c( 'TMPro.KerningTable' )
  var i1081 = data
  var i1083 = i1081[0]
  var i1082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.add(request.d('TMPro.KerningPair', i1083[i + 0]));
  }
  i1080.kerningPairs = i1082
  return i1080
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.KerningPair' )
  var i1087 = data
  i1086.xOffset = i1087[0]
  i1086.m_FirstGlyph = i1087[1]
  i1086.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1087[2], i1086.m_FirstGlyphAdjustments)
  i1086.m_SecondGlyph = i1087[3]
  i1086.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1087[4], i1086.m_SecondGlyphAdjustments)
  i1086.m_IgnoreSpacingAdjustments = !!i1087[5]
  return i1086
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1089 = data
  var i1091 = i1089[0]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1091[i + 0]));
  }
  i1088.m_GlyphPairAdjustmentRecords = i1090
  return i1088
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1095 = data
  i1094.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1095[0], i1094.m_FirstAdjustmentRecord)
  i1094.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1095[1], i1094.m_SecondAdjustmentRecord)
  i1094.m_FeatureLookupFlags = i1095[2]
  return i1094
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1096 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1097 = data
  i1096.m_GlyphIndex = i1097[0]
  i1096.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1097[1], i1096.m_GlyphValueRecord)
  return i1096
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1099 = data
  i1098.m_XPlacement = i1099[0]
  i1098.m_YPlacement = i1099[1]
  i1098.m_XAdvance = i1099[2]
  i1098.m_YAdvance = i1099[3]
  return i1098
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1103 = data
  i1102.sourceFontFileName = i1103[0]
  i1102.sourceFontFileGUID = i1103[1]
  i1102.pointSizeSamplingMode = i1103[2]
  i1102.pointSize = i1103[3]
  i1102.padding = i1103[4]
  i1102.packingMode = i1103[5]
  i1102.atlasWidth = i1103[6]
  i1102.atlasHeight = i1103[7]
  i1102.characterSetSelectionMode = i1103[8]
  i1102.characterSequence = i1103[9]
  i1102.referencedFontAssetGUID = i1103[10]
  i1102.referencedTextAssetGUID = i1103[11]
  i1102.fontStyle = i1103[12]
  i1102.fontStyleModifier = i1103[13]
  i1102.renderMode = i1103[14]
  i1102.includeFontFeatures = !!i1103[15]
  return i1102
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'regularTypeface')
  request.r(i1107[2], i1107[3], 0, i1106, 'italicTypeface')
  return i1106
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1108 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1109 = data
  i1108.useSafeMode = !!i1109[0]
  i1108.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1109[1], i1108.safeModeOptions)
  i1108.timeScale = i1109[2]
  i1108.unscaledTimeScale = i1109[3]
  i1108.useSmoothDeltaTime = !!i1109[4]
  i1108.maxSmoothUnscaledTime = i1109[5]
  i1108.rewindCallbackMode = i1109[6]
  i1108.showUnityEditorReport = !!i1109[7]
  i1108.logBehaviour = i1109[8]
  i1108.drawGizmos = !!i1109[9]
  i1108.defaultRecyclable = !!i1109[10]
  i1108.defaultAutoPlay = i1109[11]
  i1108.defaultUpdateType = i1109[12]
  i1108.defaultTimeScaleIndependent = !!i1109[13]
  i1108.defaultEaseType = i1109[14]
  i1108.defaultEaseOvershootOrAmplitude = i1109[15]
  i1108.defaultEasePeriod = i1109[16]
  i1108.defaultAutoKill = !!i1109[17]
  i1108.defaultLoopType = i1109[18]
  i1108.debugMode = !!i1109[19]
  i1108.debugStoreTargetId = !!i1109[20]
  i1108.showPreviewPanel = !!i1109[21]
  i1108.storeSettingsLocation = i1109[22]
  i1108.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1109[23], i1108.modules)
  i1108.createASMDEF = !!i1109[24]
  i1108.showPlayingTweens = !!i1109[25]
  i1108.showPausedTweens = !!i1109[26]
  return i1108
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1110 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1111 = data
  i1110.logBehaviour = i1111[0]
  i1110.nestedTweenFailureBehaviour = i1111[1]
  return i1110
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1112 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1113 = data
  i1112.showPanel = !!i1113[0]
  i1112.audioEnabled = !!i1113[1]
  i1112.physicsEnabled = !!i1113[2]
  i1112.physics2DEnabled = !!i1113[3]
  i1112.spriteEnabled = !!i1113[4]
  i1112.uiEnabled = !!i1113[5]
  i1112.textMeshProEnabled = !!i1113[6]
  i1112.tk2DEnabled = !!i1113[7]
  i1112.deAudioEnabled = !!i1113[8]
  i1112.deUnityExtendedEnabled = !!i1113[9]
  i1112.epoOutlineEnabled = !!i1113[10]
  return i1112
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.TMP_Settings' )
  var i1115 = data
  i1114.m_enableWordWrapping = !!i1115[0]
  i1114.m_enableKerning = !!i1115[1]
  i1114.m_enableExtraPadding = !!i1115[2]
  i1114.m_enableTintAllSprites = !!i1115[3]
  i1114.m_enableParseEscapeCharacters = !!i1115[4]
  i1114.m_EnableRaycastTarget = !!i1115[5]
  i1114.m_GetFontFeaturesAtRuntime = !!i1115[6]
  i1114.m_missingGlyphCharacter = i1115[7]
  i1114.m_warningsDisabled = !!i1115[8]
  request.r(i1115[9], i1115[10], 0, i1114, 'm_defaultFontAsset')
  i1114.m_defaultFontAssetPath = i1115[11]
  i1114.m_defaultFontSize = i1115[12]
  i1114.m_defaultAutoSizeMinRatio = i1115[13]
  i1114.m_defaultAutoSizeMaxRatio = i1115[14]
  i1114.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1115[15], i1115[16] )
  i1114.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1115[17], i1115[18] )
  i1114.m_autoSizeTextContainer = !!i1115[19]
  i1114.m_IsTextObjectScaleStatic = !!i1115[20]
  var i1117 = i1115[21]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1117.length; i += 2) {
  request.r(i1117[i + 0], i1117[i + 1], 1, i1116, '')
  }
  i1114.m_fallbackFontAssets = i1116
  i1114.m_matchMaterialPreset = !!i1115[22]
  request.r(i1115[23], i1115[24], 0, i1114, 'm_defaultSpriteAsset')
  i1114.m_defaultSpriteAssetPath = i1115[25]
  i1114.m_enableEmojiSupport = !!i1115[26]
  i1114.m_MissingCharacterSpriteUnicode = i1115[27]
  i1114.m_defaultColorGradientPresetsPath = i1115[28]
  request.r(i1115[29], i1115[30], 0, i1114, 'm_defaultStyleSheet')
  i1114.m_StyleSheetsResourcePath = i1115[31]
  request.r(i1115[32], i1115[33], 0, i1114, 'm_leadingCharacters')
  request.r(i1115[34], i1115[35], 0, i1114, 'm_followingCharacters')
  i1114.m_UseModernHangulLineBreakingRules = !!i1115[36]
  return i1114
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1119 = data
  i1118.hashCode = i1119[0]
  request.r(i1119[1], i1119[2], 0, i1118, 'material')
  i1118.materialHashCode = i1119[3]
  request.r(i1119[4], i1119[5], 0, i1118, 'spriteSheet')
  var i1121 = i1119[6]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.TMP_Sprite', i1121[i + 0]));
  }
  i1118.spriteInfoList = i1120
  var i1123 = i1119[7]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 1, i1122, '')
  }
  i1118.fallbackSpriteAssets = i1122
  i1118.m_Version = i1119[8]
  i1118.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1119[9], i1118.m_FaceInfo)
  var i1125 = i1119[10]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('TMPro.TMP_SpriteCharacter', i1125[i + 0]));
  }
  i1118.m_SpriteCharacterTable = i1124
  var i1127 = i1119[11]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('TMPro.TMP_SpriteGlyph', i1127[i + 0]));
  }
  i1118.m_SpriteGlyphTable = i1126
  return i1118
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1130 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.hashCode = i1131[1]
  i1130.unicode = i1131[2]
  i1130.pivot = new pc.Vec2( i1131[3], i1131[4] )
  request.r(i1131[5], i1131[6], 0, i1130, 'sprite')
  i1130.id = i1131[7]
  i1130.x = i1131[8]
  i1130.y = i1131[9]
  i1130.width = i1131[10]
  i1130.height = i1131[11]
  i1130.xOffset = i1131[12]
  i1130.yOffset = i1131[13]
  i1130.xAdvance = i1131[14]
  i1130.scale = i1131[15]
  return i1130
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1137 = data
  i1136.m_Name = i1137[0]
  i1136.m_HashCode = i1137[1]
  i1136.m_ElementType = i1137[2]
  i1136.m_Unicode = i1137[3]
  i1136.m_GlyphIndex = i1137[4]
  i1136.m_Scale = i1137[5]
  return i1136
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'sprite')
  i1140.m_Index = i1141[2]
  i1140.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1141[3], i1140.m_Metrics)
  i1140.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1141[4], i1140.m_GlyphRect)
  i1140.m_Scale = i1141[5]
  i1140.m_AtlasIndex = i1141[6]
  i1140.m_ClassDefinitionType = i1141[7]
  return i1140
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1142 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1143 = data
  var i1145 = i1143[0]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('TMPro.TMP_Style', i1145[i + 0]));
  }
  i1142.m_StyleList = i1144
  return i1142
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.TMP_Style' )
  var i1149 = data
  i1148.m_Name = i1149[0]
  i1148.m_HashCode = i1149[1]
  i1148.m_OpeningDefinition = i1149[2]
  i1148.m_ClosingDefinition = i1149[3]
  i1148.m_OpeningTagArray = i1149[4]
  i1148.m_ClosingTagArray = i1149[5]
  i1148.m_OpeningTagUnicodeArray = i1149[6]
  i1148.m_ClosingTagUnicodeArray = i1149[7]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1153[i + 0]) );
  }
  i1150.files = i1152
  i1150.componentToPrefabIds = i1151[1]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1157 = data
  i1156.path = i1157[0]
  request.r(i1157[1], i1157[2], 0, i1156, 'unityObject')
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1161[i + 0]) );
  }
  i1158.scriptsExecutionOrder = i1160
  var i1163 = i1159[1]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1163[i + 0]) );
  }
  i1158.sortingLayers = i1162
  var i1165 = i1159[2]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1165[i + 0]) );
  }
  i1158.cullingLayers = i1164
  i1158.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1159[3], i1158.timeSettings)
  i1158.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1159[4], i1158.physicsSettings)
  i1158.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1159[5], i1158.physics2DSettings)
  i1158.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1159[6], i1158.qualitySettings)
  i1158.enableRealtimeShadows = !!i1159[7]
  i1158.enableAutoInstancing = !!i1159[8]
  i1158.enableDynamicBatching = !!i1159[9]
  i1158.lightmapEncodingQuality = i1159[10]
  i1158.desiredColorSpace = i1159[11]
  var i1167 = i1159[12]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( i1167[i + 0] );
  }
  i1158.allTags = i1166
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.value = i1171[1]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1175 = data
  i1174.id = i1175[0]
  i1174.name = i1175[1]
  i1174.value = i1175[2]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1179 = data
  i1178.id = i1179[0]
  i1178.name = i1179[1]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1181 = data
  i1180.fixedDeltaTime = i1181[0]
  i1180.maximumDeltaTime = i1181[1]
  i1180.timeScale = i1181[2]
  i1180.maximumParticleTimestep = i1181[3]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1183 = data
  i1182.gravity = new pc.Vec3( i1183[0], i1183[1], i1183[2] )
  i1182.defaultSolverIterations = i1183[3]
  i1182.bounceThreshold = i1183[4]
  i1182.autoSyncTransforms = !!i1183[5]
  i1182.autoSimulation = !!i1183[6]
  var i1185 = i1183[7]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1185[i + 0]) );
  }
  i1182.collisionMatrix = i1184
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1189 = data
  i1188.enabled = !!i1189[0]
  i1188.layerId = i1189[1]
  i1188.otherLayerId = i1189[2]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'material')
  i1190.gravity = new pc.Vec2( i1191[2], i1191[3] )
  i1190.positionIterations = i1191[4]
  i1190.velocityIterations = i1191[5]
  i1190.velocityThreshold = i1191[6]
  i1190.maxLinearCorrection = i1191[7]
  i1190.maxAngularCorrection = i1191[8]
  i1190.maxTranslationSpeed = i1191[9]
  i1190.maxRotationSpeed = i1191[10]
  i1190.baumgarteScale = i1191[11]
  i1190.baumgarteTOIScale = i1191[12]
  i1190.timeToSleep = i1191[13]
  i1190.linearSleepTolerance = i1191[14]
  i1190.angularSleepTolerance = i1191[15]
  i1190.defaultContactOffset = i1191[16]
  i1190.autoSimulation = !!i1191[17]
  i1190.queriesHitTriggers = !!i1191[18]
  i1190.queriesStartInColliders = !!i1191[19]
  i1190.callbacksOnDisable = !!i1191[20]
  i1190.reuseCollisionCallbacks = !!i1191[21]
  i1190.autoSyncTransforms = !!i1191[22]
  var i1193 = i1191[23]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1193[i + 0]) );
  }
  i1190.collisionMatrix = i1192
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1197 = data
  i1196.enabled = !!i1197[0]
  i1196.layerId = i1197[1]
  i1196.otherLayerId = i1197[2]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1201[i + 0]) );
  }
  i1198.qualityLevels = i1200
  var i1203 = i1199[1]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( i1203[i + 0] );
  }
  i1198.names = i1202
  i1198.shadows = i1199[2]
  i1198.anisotropicFiltering = i1199[3]
  i1198.antiAliasing = i1199[4]
  i1198.lodBias = i1199[5]
  i1198.shadowCascades = i1199[6]
  i1198.shadowDistance = i1199[7]
  i1198.shadowmaskMode = i1199[8]
  i1198.shadowProjection = i1199[9]
  i1198.shadowResolution = i1199[10]
  i1198.softParticles = !!i1199[11]
  i1198.softVegetation = !!i1199[12]
  i1198.activeColorSpace = i1199[13]
  i1198.desiredColorSpace = i1199[14]
  i1198.masterTextureLimit = i1199[15]
  i1198.maxQueuedFrames = i1199[16]
  i1198.particleRaycastBudget = i1199[17]
  i1198.pixelLightCount = i1199[18]
  i1198.realtimeReflectionProbes = !!i1199[19]
  i1198.shadowCascade2Split = i1199[20]
  i1198.shadowCascade4Split = new pc.Vec3( i1199[21], i1199[22], i1199[23] )
  i1198.streamingMipmapsActive = !!i1199[24]
  i1198.vSyncCount = i1199[25]
  i1198.asyncUploadBufferSize = i1199[26]
  i1198.asyncUploadTimeSlice = i1199[27]
  i1198.billboardsFaceCameraPosition = !!i1199[28]
  i1198.shadowNearPlaneOffset = i1199[29]
  i1198.streamingMipmapsMemoryBudget = i1199[30]
  i1198.maximumLODLevel = i1199[31]
  i1198.streamingMipmapsAddAllCameras = !!i1199[32]
  i1198.streamingMipmapsMaxLevelReduction = i1199[33]
  i1198.streamingMipmapsRenderersPerFrame = i1199[34]
  i1198.resolutionScalingFixedDPIFactor = i1199[35]
  i1198.streamingMipmapsMaxFileIORequests = i1199[36]
  i1198.currentQualityLevel = i1199[37]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1209 = data
  i1208.weight = i1209[0]
  i1208.vertices = i1209[1]
  i1208.normals = i1209[2]
  i1208.tangents = i1209[3]
  return i1208
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1211 = data
  i1210.xPlacement = i1211[0]
  i1210.yPlacement = i1211[1]
  i1210.xAdvance = i1211[2]
  i1210.yAdvance = i1211[3]
  return i1210
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[94],"95":[13],"96":[97],"98":[97],"99":[97],"100":[97],"101":[97],"102":[97],"103":[97],"104":[105],"106":[105],"107":[105],"108":[105],"109":[105],"110":[105],"111":[105],"112":[105],"113":[105],"114":[105],"115":[105],"116":[105],"117":[105],"118":[13],"119":[5],"120":[121],"122":[121],"23":[8],"123":[9,124,8],"56":[8],"125":[13],"16":[13],"18":[17],"126":[127],"128":[8],"129":[8],"25":[23],"11":[9,8],"130":[8],"24":[23],"36":[8],"131":[8],"63":[8],"132":[8],"41":[8],"133":[8],"35":[8],"45":[8],"134":[8],"135":[9,8],"136":[8],"44":[8],"40":[8],"29":[8],"39":[9,8],"49":[8],"137":[21],"138":[21],"22":[21],"139":[21],"140":[13],"141":[13],"142":[127],"143":[8],"144":[5,8],"27":[8,9],"145":[8],"146":[9,8],"147":[5],"148":[9,8],"149":[8],"150":[127]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TextHint","TMPro.TextMeshProUGUI","TimerSlider","UnityEngine.UI.Slider","TMPro.TMP_FontAsset","GameManager","UnityEngine.GameObject","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "0.5";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1775";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4122";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, mecanim-wasm";

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

Deserializers.buildID = "7270e27b-d532-4439-a473-c7af8fa52086";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

