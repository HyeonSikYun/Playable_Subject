var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointSpring' )
  var i609 = data
  i608.spring = i609[0]
  i608.damper = i609[1]
  i608.targetPosition = i609[2]
  return i608
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointMotor' )
  var i611 = data
  i610.m_TargetVelocity = i611[0]
  i610.m_Force = i611[1]
  i610.m_FreeSpin = i611[2]
  return i610
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointLimits' )
  var i613 = data
  i612.m_Min = i613[0]
  i612.m_Max = i613[1]
  i612.m_Bounciness = i613[2]
  i612.m_BounceMinVelocity = i613[3]
  i612.m_ContactDistance = i613[4]
  i612.minBounce = i613[5]
  i612.maxBounce = i613[6]
  return i612
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointDrive' )
  var i615 = data
  i614.m_PositionSpring = i615[0]
  i614.m_PositionDamper = i615[1]
  i614.m_MaximumForce = i615[2]
  i614.m_UseAcceleration = i615[3]
  return i614
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i617 = data
  i616.m_Spring = i617[0]
  i616.m_Damper = i617[1]
  return i616
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i619 = data
  i618.m_Limit = i619[0]
  i618.m_Bounciness = i619[1]
  i618.m_ContactDistance = i619[2]
  return i618
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i621 = data
  i620.m_ExtremumSlip = i621[0]
  i620.m_ExtremumValue = i621[1]
  i620.m_AsymptoteSlip = i621[2]
  i620.m_AsymptoteValue = i621[3]
  i620.m_Stiffness = i621[4]
  return i620
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i623 = data
  i622.m_LowerAngle = i623[0]
  i622.m_UpperAngle = i623[1]
  return i622
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i625 = data
  i624.m_MotorSpeed = i625[0]
  i624.m_MaximumMotorTorque = i625[1]
  return i624
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i627 = data
  i626.m_DampingRatio = i627[0]
  i626.m_Frequency = i627[1]
  i626.m_Angle = i627[2]
  return i626
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i629 = data
  i628.m_LowerTranslation = i629[0]
  i628.m_UpperTranslation = i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i631 = data
  i630.name = i631[0]
  i630.width = i631[1]
  i630.height = i631[2]
  i630.mipmapCount = i631[3]
  i630.anisoLevel = i631[4]
  i630.filterMode = i631[5]
  i630.hdr = !!i631[6]
  i630.format = i631[7]
  i630.wrapMode = i631[8]
  i630.alphaIsTransparency = !!i631[9]
  i630.alphaSource = i631[10]
  i630.graphicsFormat = i631[11]
  i630.sRGBTexture = !!i631[12]
  i630.desiredColorSpace = i631[13]
  i630.wrapU = i631[14]
  i630.wrapV = i631[15]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i632 = root || new pc.UnityMaterial()
  var i633 = data
  i632.name = i633[0]
  request.r(i633[1], i633[2], 0, i632, 'shader')
  i632.renderQueue = i633[3]
  i632.enableInstancing = !!i633[4]
  var i635 = i633[5]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i635[i + 0]) );
  }
  i632.floatParameters = i634
  var i637 = i633[6]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i637[i + 0]) );
  }
  i632.colorParameters = i636
  var i639 = i633[7]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i639[i + 0]) );
  }
  i632.vectorParameters = i638
  var i641 = i633[8]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i641[i + 0]) );
  }
  i632.textureParameters = i640
  var i643 = i633[9]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i643[i + 0]) );
  }
  i632.materialFlags = i642
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i647 = data
  i646.name = i647[0]
  i646.value = i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i651 = data
  i650.name = i651[0]
  i650.value = new pc.Color(i651[1], i651[2], i651[3], i651[4])
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i655 = data
  i654.name = i655[0]
  i654.value = new pc.Vec4( i655[1], i655[2], i655[3], i655[4] )
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i659 = data
  i658.name = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'value')
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i663 = data
  i662.name = i663[0]
  i662.enabled = !!i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i665 = data
  i664.position = new pc.Vec3( i665[0], i665[1], i665[2] )
  i664.scale = new pc.Vec3( i665[3], i665[4], i665[5] )
  i664.rotation = new pc.Quat(i665[6], i665[7], i665[8], i665[9])
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'sharedMesh')
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'additionalVertexStreams')
  i668.enabled = !!i669[2]
  request.r(i669[3], i669[4], 0, i668, 'sharedMaterial')
  var i671 = i669[5]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i668.sharedMaterials = i670
  i668.receiveShadows = !!i669[6]
  i668.shadowCastingMode = i669[7]
  i668.sortingLayerID = i669[8]
  i668.sortingOrder = i669[9]
  i668.lightmapIndex = i669[10]
  i668.lightmapSceneIndex = i669[11]
  i668.lightmapScaleOffset = new pc.Vec4( i669[12], i669[13], i669[14], i669[15] )
  i668.lightProbeUsage = i669[16]
  i668.reflectionProbeUsage = i669[17]
  return i668
}

Deserializers["Case"] = function (request, data, root) {
  var i674 = root || request.c( 'Case' )
  var i675 = data
  i674.lineIndex = i675[0]
  i674.caseColor = new pc.Color(i675[1], i675[2], i675[3], i675[4])
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i677 = data
  i676.name = i677[0]
  i676.tagId = i677[1]
  i676.enabled = !!i677[2]
  i676.isStatic = !!i677[3]
  i676.layer = i677[4]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i679 = data
  i678.name = i679[0]
  i678.halfPrecision = !!i679[1]
  i678.useUInt32IndexFormat = !!i679[2]
  i678.vertexCount = i679[3]
  i678.aabb = i679[4]
  var i681 = i679[5]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( !!i681[i + 0] );
  }
  i678.streams = i680
  i678.vertices = i679[6]
  var i683 = i679[7]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i683[i + 0]) );
  }
  i678.subMeshes = i682
  var i685 = i679[8]
  var i684 = []
  for(var i = 0; i < i685.length; i += 16) {
    i684.push( new pc.Mat4().setData(i685[i + 0], i685[i + 1], i685[i + 2], i685[i + 3],  i685[i + 4], i685[i + 5], i685[i + 6], i685[i + 7],  i685[i + 8], i685[i + 9], i685[i + 10], i685[i + 11],  i685[i + 12], i685[i + 13], i685[i + 14], i685[i + 15]) );
  }
  i678.bindposes = i684
  var i687 = i679[9]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i687[i + 0]) );
  }
  i678.blendShapes = i686
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i693 = data
  i692.triangles = i693[0]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i699 = data
  i698.name = i699[0]
  var i701 = i699[1]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i701[i + 0]) );
  }
  i698.frames = i700
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i703 = data
  i702.center = new pc.Vec3( i703[0], i703[1], i703[2] )
  i702.size = new pc.Vec3( i703[3], i703[4], i703[5] )
  i702.enabled = !!i703[6]
  i702.isTrigger = !!i703[7]
  request.r(i703[8], i703[9], 0, i702, 'material')
  return i702
}

Deserializers["Bottle"] = function (request, data, root) {
  var i704 = root || request.c( 'Bottle' )
  var i705 = data
  i704.bottleColor = new pc.Color(i705[0], i705[1], i705[2], i705[3])
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i725 = data
  i724.pivot = new pc.Vec2( i725[0], i725[1] )
  i724.anchorMin = new pc.Vec2( i725[2], i725[3] )
  i724.anchorMax = new pc.Vec2( i725[4], i725[5] )
  i724.sizeDelta = new pc.Vec2( i725[6], i725[7] )
  i724.anchoredPosition3D = new pc.Vec3( i725[8], i725[9], i725[10] )
  i724.rotation = new pc.Quat(i725[11], i725[12], i725[13], i725[14])
  i724.scale = new pc.Vec3( i725[15], i725[16], i725[17] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i727 = data
  i726.enabled = !!i727[0]
  i726.planeDistance = i727[1]
  i726.referencePixelsPerUnit = i727[2]
  i726.isFallbackOverlay = !!i727[3]
  i726.renderMode = i727[4]
  i726.renderOrder = i727[5]
  i726.sortingLayerName = i727[6]
  i726.sortingOrder = i727[7]
  i726.scaleFactor = i727[8]
  request.r(i727[9], i727[10], 0, i726, 'worldCamera')
  i726.overrideSorting = !!i727[11]
  i726.pixelPerfect = !!i727[12]
  i726.targetDisplay = i727[13]
  i726.overridePixelPerfect = !!i727[14]
  return i726
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i729 = data
  i728.m_UiScaleMode = i729[0]
  i728.m_ReferencePixelsPerUnit = i729[1]
  i728.m_ScaleFactor = i729[2]
  i728.m_ReferenceResolution = new pc.Vec2( i729[3], i729[4] )
  i728.m_ScreenMatchMode = i729[5]
  i728.m_MatchWidthOrHeight = i729[6]
  i728.m_PhysicalUnit = i729[7]
  i728.m_FallbackScreenDPI = i729[8]
  i728.m_DefaultSpriteDPI = i729[9]
  i728.m_DynamicPixelsPerUnit = i729[10]
  i728.m_PresetInfoIsWorld = !!i729[11]
  return i728
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i731 = data
  i730.m_IgnoreReversedGraphics = !!i731[0]
  i730.m_BlockingObjects = i731[1]
  i730.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i731[2] )
  return i730
}

Deserializers["TextHint"] = function (request, data, root) {
  var i732 = root || request.c( 'TextHint' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'hintText')
  i732.scaleAmount = i733[2]
  i732.duration = i733[3]
  return i732
}

Deserializers["TimerSlider"] = function (request, data, root) {
  var i734 = root || request.c( 'TimerSlider' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'timerSlider')
  i734.totalTime = i735[2]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i737 = data
  i736.cullTransparentMesh = !!i737[0]
  return i736
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.Image' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_Sprite')
  i738.m_Type = i739[2]
  i738.m_PreserveAspect = !!i739[3]
  i738.m_FillCenter = !!i739[4]
  i738.m_FillMethod = i739[5]
  i738.m_FillAmount = i739[6]
  i738.m_FillClockwise = !!i739[7]
  i738.m_FillOrigin = i739[8]
  i738.m_UseSpriteMesh = !!i739[9]
  i738.m_PixelsPerUnitMultiplier = i739[10]
  request.r(i739[11], i739[12], 0, i738, 'm_Material')
  i738.m_Maskable = !!i739[13]
  i738.m_Color = new pc.Color(i739[14], i739[15], i739[16], i739[17])
  i738.m_RaycastTarget = !!i739[18]
  i738.m_RaycastPadding = new pc.Vec4( i739[19], i739[20], i739[21], i739[22] )
  return i738
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i740 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i741 = data
  i740.m_hasFontAssetChanged = !!i741[0]
  request.r(i741[1], i741[2], 0, i740, 'm_baseMaterial')
  i740.m_maskOffset = new pc.Vec4( i741[3], i741[4], i741[5], i741[6] )
  i740.m_text = i741[7]
  i740.m_isRightToLeft = !!i741[8]
  request.r(i741[9], i741[10], 0, i740, 'm_fontAsset')
  request.r(i741[11], i741[12], 0, i740, 'm_sharedMaterial')
  var i743 = i741[13]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i740.m_fontSharedMaterials = i742
  request.r(i741[14], i741[15], 0, i740, 'm_fontMaterial')
  var i745 = i741[16]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i740.m_fontMaterials = i744
  i740.m_fontColor32 = UnityEngine.Color32.ConstructColor(i741[17], i741[18], i741[19], i741[20])
  i740.m_fontColor = new pc.Color(i741[21], i741[22], i741[23], i741[24])
  i740.m_enableVertexGradient = !!i741[25]
  i740.m_colorMode = i741[26]
  i740.m_fontColorGradient = request.d('TMPro.VertexGradient', i741[27], i740.m_fontColorGradient)
  request.r(i741[28], i741[29], 0, i740, 'm_fontColorGradientPreset')
  request.r(i741[30], i741[31], 0, i740, 'm_spriteAsset')
  i740.m_tintAllSprites = !!i741[32]
  request.r(i741[33], i741[34], 0, i740, 'm_StyleSheet')
  i740.m_TextStyleHashCode = i741[35]
  i740.m_overrideHtmlColors = !!i741[36]
  i740.m_faceColor = UnityEngine.Color32.ConstructColor(i741[37], i741[38], i741[39], i741[40])
  i740.m_fontSize = i741[41]
  i740.m_fontSizeBase = i741[42]
  i740.m_fontWeight = i741[43]
  i740.m_enableAutoSizing = !!i741[44]
  i740.m_fontSizeMin = i741[45]
  i740.m_fontSizeMax = i741[46]
  i740.m_fontStyle = i741[47]
  i740.m_HorizontalAlignment = i741[48]
  i740.m_VerticalAlignment = i741[49]
  i740.m_textAlignment = i741[50]
  i740.m_characterSpacing = i741[51]
  i740.m_wordSpacing = i741[52]
  i740.m_lineSpacing = i741[53]
  i740.m_lineSpacingMax = i741[54]
  i740.m_paragraphSpacing = i741[55]
  i740.m_charWidthMaxAdj = i741[56]
  i740.m_enableWordWrapping = !!i741[57]
  i740.m_wordWrappingRatios = i741[58]
  i740.m_overflowMode = i741[59]
  request.r(i741[60], i741[61], 0, i740, 'm_linkedTextComponent')
  request.r(i741[62], i741[63], 0, i740, 'parentLinkedComponent')
  i740.m_enableKerning = !!i741[64]
  i740.m_enableExtraPadding = !!i741[65]
  i740.checkPaddingRequired = !!i741[66]
  i740.m_isRichText = !!i741[67]
  i740.m_parseCtrlCharacters = !!i741[68]
  i740.m_isOrthographic = !!i741[69]
  i740.m_isCullingEnabled = !!i741[70]
  i740.m_horizontalMapping = i741[71]
  i740.m_verticalMapping = i741[72]
  i740.m_uvLineOffset = i741[73]
  i740.m_geometrySortingOrder = i741[74]
  i740.m_IsTextObjectScaleStatic = !!i741[75]
  i740.m_VertexBufferAutoSizeReduction = !!i741[76]
  i740.m_useMaxVisibleDescender = !!i741[77]
  i740.m_pageToDisplay = i741[78]
  i740.m_margin = new pc.Vec4( i741[79], i741[80], i741[81], i741[82] )
  i740.m_isUsingLegacyAnimationComponent = !!i741[83]
  i740.m_isVolumetricText = !!i741[84]
  request.r(i741[85], i741[86], 0, i740, 'm_Material')
  i740.m_Maskable = !!i741[87]
  i740.m_Color = new pc.Color(i741[88], i741[89], i741[90], i741[91])
  i740.m_RaycastTarget = !!i741[92]
  i740.m_RaycastPadding = new pc.Vec4( i741[93], i741[94], i741[95], i741[96] )
  return i740
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i746 = root || request.c( 'TMPro.VertexGradient' )
  var i747 = data
  i746.topLeft = new pc.Color(i747[0], i747[1], i747[2], i747[3])
  i746.topRight = new pc.Color(i747[4], i747[5], i747[6], i747[7])
  i746.bottomLeft = new pc.Color(i747[8], i747[9], i747[10], i747[11])
  i746.bottomRight = new pc.Color(i747[12], i747[13], i747[14], i747[15])
  return i746
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Slider' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_FillRect')
  request.r(i749[2], i749[3], 0, i748, 'm_HandleRect')
  i748.m_Direction = i749[4]
  i748.m_MinValue = i749[5]
  i748.m_MaxValue = i749[6]
  i748.m_WholeNumbers = !!i749[7]
  i748.m_Value = i749[8]
  i748.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i749[9], i748.m_OnValueChanged)
  i748.m_Navigation = request.d('UnityEngine.UI.Navigation', i749[10], i748.m_Navigation)
  i748.m_Transition = i749[11]
  i748.m_Colors = request.d('UnityEngine.UI.ColorBlock', i749[12], i748.m_Colors)
  i748.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i749[13], i748.m_SpriteState)
  i748.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i749[14], i748.m_AnimationTriggers)
  i748.m_Interactable = !!i749[15]
  request.r(i749[16], i749[17], 0, i748, 'm_TargetGraphic')
  return i748
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i751 = data
  i750.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i751[0], i750.m_PersistentCalls)
  return i750
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i753 = data
  var i755 = i753[0]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('UnityEngine.Events.PersistentCall', i755[i + 0]));
  }
  i752.m_Calls = i754
  return i752
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'm_Target')
  i758.m_TargetAssemblyTypeName = i759[2]
  i758.m_MethodName = i759[3]
  i758.m_Mode = i759[4]
  i758.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i759[5], i758.m_Arguments)
  i758.m_CallState = i759[6]
  return i758
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i761 = data
  i760.m_Mode = i761[0]
  i760.m_WrapAround = !!i761[1]
  request.r(i761[2], i761[3], 0, i760, 'm_SelectOnUp')
  request.r(i761[4], i761[5], 0, i760, 'm_SelectOnDown')
  request.r(i761[6], i761[7], 0, i760, 'm_SelectOnLeft')
  request.r(i761[8], i761[9], 0, i760, 'm_SelectOnRight')
  return i760
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i763 = data
  i762.m_NormalColor = new pc.Color(i763[0], i763[1], i763[2], i763[3])
  i762.m_HighlightedColor = new pc.Color(i763[4], i763[5], i763[6], i763[7])
  i762.m_PressedColor = new pc.Color(i763[8], i763[9], i763[10], i763[11])
  i762.m_SelectedColor = new pc.Color(i763[12], i763[13], i763[14], i763[15])
  i762.m_DisabledColor = new pc.Color(i763[16], i763[17], i763[18], i763[19])
  i762.m_ColorMultiplier = i763[20]
  i762.m_FadeDuration = i763[21]
  return i762
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_HighlightedSprite')
  request.r(i765[2], i765[3], 0, i764, 'm_PressedSprite')
  request.r(i765[4], i765[5], 0, i764, 'm_SelectedSprite')
  request.r(i765[6], i765[7], 0, i764, 'm_DisabledSprite')
  return i764
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i767 = data
  i766.m_NormalTrigger = i767[0]
  i766.m_HighlightedTrigger = i767[1]
  i766.m_PressedTrigger = i767[2]
  i766.m_SelectedTrigger = i767[3]
  i766.m_DisabledTrigger = i767[4]
  return i766
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i769 = data
  i768.priority = i769[0]
  i768.blendDistance = i769[1]
  i768.weight = i769[2]
  request.r(i769[3], i769[4], 0, i768, 'sharedProfile')
  i768.m_IsGlobal = !!i769[5]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i771 = data
  i770.enabled = !!i771[0]
  i770.type = i771[1]
  i770.color = new pc.Color(i771[2], i771[3], i771[4], i771[5])
  i770.cullingMask = i771[6]
  i770.intensity = i771[7]
  i770.range = i771[8]
  i770.spotAngle = i771[9]
  i770.shadows = i771[10]
  i770.shadowNormalBias = i771[11]
  i770.shadowBias = i771[12]
  i770.shadowStrength = i771[13]
  i770.shadowResolution = i771[14]
  i770.lightmapBakeType = i771[15]
  i770.renderMode = i771[16]
  request.r(i771[17], i771[18], 0, i770, 'cookie')
  i770.cookieSize = i771[19]
  return i770
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i773 = data
  i772.m_Version = i773[0]
  i772.m_UsePipelineSettings = !!i773[1]
  i772.m_AdditionalLightsShadowResolutionTier = i773[2]
  i772.m_LightLayerMask = i773[3]
  i772.m_RenderingLayers = i773[4]
  i772.m_CustomShadowLayers = !!i773[5]
  i772.m_ShadowLayerMask = i773[6]
  i772.m_ShadowRenderingLayers = i773[7]
  i772.m_LightCookieSize = new pc.Vec2( i773[8], i773[9] )
  i772.m_LightCookieOffset = new pc.Vec2( i773[10], i773[11] )
  i772.m_SoftShadowQuality = i773[12]
  return i772
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'm_FirstSelected')
  i774.m_sendNavigationEvents = !!i775[2]
  i774.m_DragThreshold = i775[3]
  return i774
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i777 = data
  i776.m_HorizontalAxis = i777[0]
  i776.m_VerticalAxis = i777[1]
  i776.m_SubmitButton = i777[2]
  i776.m_CancelButton = i777[3]
  i776.m_InputActionsPerSecond = i777[4]
  i776.m_RepeatDelay = i777[5]
  i776.m_ForceModuleActive = !!i777[6]
  i776.m_SendPointerHoverToParent = !!i777[7]
  return i776
}

Deserializers["PuzzleManager"] = function (request, data, root) {
  var i778 = root || request.c( 'PuzzleManager' )
  var i779 = data
  var i781 = i779[0]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('Case')))
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 1, i780, '')
  }
  i778.AllCases = i780
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i785 = data
  i784.ambientIntensity = i785[0]
  i784.reflectionIntensity = i785[1]
  i784.ambientMode = i785[2]
  i784.ambientLight = new pc.Color(i785[3], i785[4], i785[5], i785[6])
  i784.ambientSkyColor = new pc.Color(i785[7], i785[8], i785[9], i785[10])
  i784.ambientGroundColor = new pc.Color(i785[11], i785[12], i785[13], i785[14])
  i784.ambientEquatorColor = new pc.Color(i785[15], i785[16], i785[17], i785[18])
  i784.fogColor = new pc.Color(i785[19], i785[20], i785[21], i785[22])
  i784.fogEndDistance = i785[23]
  i784.fogStartDistance = i785[24]
  i784.fogDensity = i785[25]
  i784.fog = !!i785[26]
  request.r(i785[27], i785[28], 0, i784, 'skybox')
  i784.fogMode = i785[29]
  var i787 = i785[30]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i787[i + 0]) );
  }
  i784.lightmaps = i786
  i784.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i785[31], i784.lightProbes)
  i784.lightmapsMode = i785[32]
  i784.mixedBakeMode = i785[33]
  i784.environmentLightingMode = i785[34]
  i784.ambientProbe = new pc.SphericalHarmonicsL2(i785[35])
  i784.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i785[36])
  i784.useReferenceAmbientProbe = !!i785[37]
  request.r(i785[38], i785[39], 0, i784, 'customReflection')
  request.r(i785[40], i785[41], 0, i784, 'defaultReflection')
  i784.defaultReflectionMode = i785[42]
  i784.defaultReflectionResolution = i785[43]
  i784.sunLightObjectId = i785[44]
  i784.pixelLightCount = i785[45]
  i784.defaultReflectionHDR = !!i785[46]
  i784.hasLightDataAsset = !!i785[47]
  i784.hasManualGenerate = !!i785[48]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'lightmapColor')
  request.r(i791[2], i791[3], 0, i790, 'lightmapDirection')
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i792 = root || new UnityEngine.LightProbes()
  var i793 = data
  return i792
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'panelPrefab')
  var i803 = i801[2]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i803[i + 0]));
  }
  i800.prefabs = i802
  return i800
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i807 = data
  i806.type = i807[0]
  request.r(i807[1], i807[2], 0, i806, 'prefab')
  return i806
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i809 = data
  i808.m_Spacing = i809[0]
  i808.m_ChildForceExpandWidth = !!i809[1]
  i808.m_ChildForceExpandHeight = !!i809[2]
  i808.m_ChildControlWidth = !!i809[3]
  i808.m_ChildControlHeight = !!i809[4]
  i808.m_ChildScaleWidth = !!i809[5]
  i808.m_ChildScaleHeight = !!i809[6]
  i808.m_ReverseArrangement = !!i809[7]
  i808.m_Padding = UnityEngine.RectOffset.FromPaddings(i809[8], i809[9], i809[10], i809[11])
  i808.m_ChildAlignment = i809[12]
  return i808
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i811 = data
  i810.m_HorizontalFit = i811[0]
  i810.m_VerticalFit = i811[1]
  return i810
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'contentHolder')
  return i812
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'nameLabel')
  request.r(i815[2], i815[3], 0, i814, 'scrollRect')
  request.r(i815[4], i815[5], 0, i814, 'viewport')
  request.r(i815[6], i815[7], 0, i814, 'Canvas')
  return i814
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i817 = data
  i816.m_IgnoreLayout = !!i817[0]
  i816.m_MinWidth = i817[1]
  i816.m_MinHeight = i817[2]
  i816.m_PreferredWidth = i817[3]
  i816.m_PreferredHeight = i817[4]
  i816.m_FlexibleWidth = i817[5]
  i816.m_FlexibleHeight = i817[6]
  i816.m_LayoutPriority = i817[7]
  return i816
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.UI.Button' )
  var i819 = data
  i818.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i819[0], i818.m_OnClick)
  i818.m_Navigation = request.d('UnityEngine.UI.Navigation', i819[1], i818.m_Navigation)
  i818.m_Transition = i819[2]
  i818.m_Colors = request.d('UnityEngine.UI.ColorBlock', i819[3], i818.m_Colors)
  i818.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i819[4], i818.m_SpriteState)
  i818.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i819[5], i818.m_AnimationTriggers)
  i818.m_Interactable = !!i819[6]
  request.r(i819[7], i819[8], 0, i818, 'm_TargetGraphic')
  return i818
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i821 = data
  i820.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i821[0], i820.m_PersistentCalls)
  return i820
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'm_ObjectArgument')
  i822.m_ObjectArgumentAssemblyTypeName = i823[2]
  i822.m_IntArgument = i823[3]
  i822.m_FloatArgument = i823[4]
  i822.m_StringArgument = i823[5]
  i822.m_BoolArgument = !!i823[6]
  return i822
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.UI.Text' )
  var i825 = data
  i824.m_FontData = request.d('UnityEngine.UI.FontData', i825[0], i824.m_FontData)
  i824.m_Text = i825[1]
  request.r(i825[2], i825[3], 0, i824, 'm_Material')
  i824.m_Maskable = !!i825[4]
  i824.m_Color = new pc.Color(i825[5], i825[6], i825[7], i825[8])
  i824.m_RaycastTarget = !!i825[9]
  i824.m_RaycastPadding = new pc.Vec4( i825[10], i825[11], i825[12], i825[13] )
  return i824
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.FontData' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'm_Font')
  i826.m_FontSize = i827[2]
  i826.m_FontStyle = i827[3]
  i826.m_BestFit = !!i827[4]
  i826.m_MinSize = i827[5]
  i826.m_MaxSize = i827[6]
  i826.m_Alignment = i827[7]
  i826.m_AlignByGeometry = !!i827[8]
  i826.m_RichText = !!i827[9]
  i826.m_HorizontalOverflow = i827[10]
  i826.m_VerticalOverflow = i827[11]
  i826.m_LineSpacing = i827[12]
  return i826
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'm_Content')
  i828.m_Horizontal = !!i829[2]
  i828.m_Vertical = !!i829[3]
  i828.m_MovementType = i829[4]
  i828.m_Elasticity = i829[5]
  i828.m_Inertia = !!i829[6]
  i828.m_DecelerationRate = i829[7]
  i828.m_ScrollSensitivity = i829[8]
  request.r(i829[9], i829[10], 0, i828, 'm_Viewport')
  request.r(i829[11], i829[12], 0, i828, 'm_HorizontalScrollbar')
  request.r(i829[13], i829[14], 0, i828, 'm_VerticalScrollbar')
  i828.m_HorizontalScrollbarVisibility = i829[15]
  i828.m_VerticalScrollbarVisibility = i829[16]
  i828.m_HorizontalScrollbarSpacing = i829[17]
  i828.m_VerticalScrollbarSpacing = i829[18]
  i828.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i829[19], i828.m_OnValueChanged)
  return i828
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i831 = data
  i830.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i831[0], i830.m_PersistentCalls)
  return i830
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.Mask' )
  var i833 = data
  i832.m_ShowMaskGraphic = !!i833[0]
  return i832
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'm_HandleRect')
  i834.m_Direction = i835[2]
  i834.m_Value = i835[3]
  i834.m_Size = i835[4]
  i834.m_NumberOfSteps = i835[5]
  i834.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i835[6], i834.m_OnValueChanged)
  i834.m_Navigation = request.d('UnityEngine.UI.Navigation', i835[7], i834.m_Navigation)
  i834.m_Transition = i835[8]
  i834.m_Colors = request.d('UnityEngine.UI.ColorBlock', i835[9], i834.m_Colors)
  i834.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i835[10], i834.m_SpriteState)
  i834.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i835[11], i834.m_AnimationTriggers)
  i834.m_Interactable = !!i835[12]
  request.r(i835[13], i835[14], 0, i834, 'm_TargetGraphic')
  return i834
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i837 = data
  i836.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i837[0], i836.m_PersistentCalls)
  return i836
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i839 = data
  var i841 = i839[0]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i841[i + 0]));
  }
  i838.m_Delegates = i840
  return i838
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i845 = data
  i844.eventID = i845[0]
  i844.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i845[1], i844.callback)
  return i844
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i847 = data
  i846.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i847[0], i846.m_PersistentCalls)
  return i846
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'nameLabel')
  request.r(i849[2], i849[3], 0, i848, 'valueLabel')
  i848.colorDefault = new pc.Color(i849[4], i849[5], i849[6], i849[7])
  i848.colorSelected = new pc.Color(i849[8], i849[9], i849[10], i849[11])
  return i848
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'nameLabel')
  request.r(i851[2], i851[3], 0, i850, 'valueToggle')
  request.r(i851[4], i851[5], 0, i850, 'checkmarkImage')
  i850.colorDefault = new pc.Color(i851[6], i851[7], i851[8], i851[9])
  i850.colorSelected = new pc.Color(i851[10], i851[11], i851[12], i851[13])
  return i850
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i853 = data
  i852.toggleTransition = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'graphic')
  i852.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i853[3], i852.onValueChanged)
  request.r(i853[4], i853[5], 0, i852, 'm_Group')
  i852.m_IsOn = !!i853[6]
  i852.m_Navigation = request.d('UnityEngine.UI.Navigation', i853[7], i852.m_Navigation)
  i852.m_Transition = i853[8]
  i852.m_Colors = request.d('UnityEngine.UI.ColorBlock', i853[9], i852.m_Colors)
  i852.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i853[10], i852.m_SpriteState)
  i852.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i853[11], i852.m_AnimationTriggers)
  i852.m_Interactable = !!i853[12]
  request.r(i853[13], i853[14], 0, i852, 'm_TargetGraphic')
  return i852
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i855 = data
  i854.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i855[0], i854.m_PersistentCalls)
  return i854
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'nameLabel')
  request.r(i857[2], i857[3], 0, i856, 'valueLabel')
  i856.colorDefault = new pc.Color(i857[4], i857[5], i857[6], i857[7])
  i856.colorSelected = new pc.Color(i857[8], i857[9], i857[10], i857[11])
  return i856
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'nameLabel')
  request.r(i859[2], i859[3], 0, i858, 'valueLabel')
  i858.colorDefault = new pc.Color(i859[4], i859[5], i859[6], i859[7])
  i858.colorSelected = new pc.Color(i859[8], i859[9], i859[10], i859[11])
  return i858
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'nameLabel')
  request.r(i861[2], i861[3], 0, i860, 'valueLabel')
  i860.colorDefault = new pc.Color(i861[4], i861[5], i861[6], i861[7])
  i860.colorSelected = new pc.Color(i861[8], i861[9], i861[10], i861[11])
  return i860
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'nextButtonText')
  request.r(i863[2], i863[3], 0, i862, 'previousButtonText')
  request.r(i863[4], i863[5], 0, i862, 'nameLabel')
  request.r(i863[6], i863[7], 0, i862, 'valueLabel')
  i862.colorDefault = new pc.Color(i863[8], i863[9], i863[10], i863[11])
  i862.colorSelected = new pc.Color(i863[12], i863[13], i863[14], i863[15])
  return i862
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'nameLabel')
  i864.colorDefault = new pc.Color(i865[2], i865[3], i865[4], i865[5])
  i864.colorSelected = new pc.Color(i865[6], i865[7], i865[8], i865[9])
  return i864
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'nameLabel')
  request.r(i867[2], i867[3], 0, i866, 'valueToggle')
  i866.colorDefault = new pc.Color(i867[4], i867[5], i867[6], i867[7])
  i866.colorSelected = new pc.Color(i867[8], i867[9], i867[10], i867[11])
  return i866
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i869 = data
  i868.toggleTransition = i869[0]
  request.r(i869[1], i869[2], 0, i868, 'graphic')
  i868.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i869[3], i868.onValueChanged)
  request.r(i869[4], i869[5], 0, i868, 'content')
  request.r(i869[6], i869[7], 0, i868, 'arrowOpened')
  request.r(i869[8], i869[9], 0, i868, 'arrowClosed')
  request.r(i869[10], i869[11], 0, i868, 'm_Group')
  i868.m_IsOn = !!i869[12]
  i868.m_Navigation = request.d('UnityEngine.UI.Navigation', i869[13], i868.m_Navigation)
  i868.m_Transition = i869[14]
  i868.m_Colors = request.d('UnityEngine.UI.ColorBlock', i869[15], i868.m_Colors)
  i868.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i869[16], i868.m_SpriteState)
  i868.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i869[17], i868.m_AnimationTriggers)
  i868.m_Interactable = !!i869[18]
  request.r(i869[19], i869[20], 0, i868, 'm_TargetGraphic')
  return i868
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'nameLabel')
  request.r(i871[2], i871[3], 0, i870, 'valueToggle')
  request.r(i871[4], i871[5], 0, i870, 'colorImage')
  request.r(i871[6], i871[7], 0, i870, 'fieldR')
  request.r(i871[8], i871[9], 0, i870, 'fieldG')
  request.r(i871[10], i871[11], 0, i870, 'fieldB')
  request.r(i871[12], i871[13], 0, i870, 'fieldA')
  i870.colorDefault = new pc.Color(i871[14], i871[15], i871[16], i871[17])
  i870.colorSelected = new pc.Color(i871[18], i871[19], i871[20], i871[21])
  return i870
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'nameLabel')
  request.r(i873[2], i873[3], 0, i872, 'valueLabel')
  i872.colorDefault = new pc.Color(i873[4], i873[5], i873[6], i873[7])
  i872.colorSelected = new pc.Color(i873[8], i873[9], i873[10], i873[11])
  return i872
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'nameLabel')
  request.r(i875[2], i875[3], 0, i874, 'valueToggle')
  request.r(i875[4], i875[5], 0, i874, 'fieldX')
  request.r(i875[6], i875[7], 0, i874, 'fieldY')
  i874.colorDefault = new pc.Color(i875[8], i875[9], i875[10], i875[11])
  i874.colorSelected = new pc.Color(i875[12], i875[13], i875[14], i875[15])
  return i874
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'nameLabel')
  request.r(i877[2], i877[3], 0, i876, 'valueToggle')
  request.r(i877[4], i877[5], 0, i876, 'fieldX')
  request.r(i877[6], i877[7], 0, i876, 'fieldY')
  request.r(i877[8], i877[9], 0, i876, 'fieldZ')
  i876.colorDefault = new pc.Color(i877[10], i877[11], i877[12], i877[13])
  i876.colorSelected = new pc.Color(i877[14], i877[15], i877[16], i877[17])
  return i876
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'nameLabel')
  request.r(i879[2], i879[3], 0, i878, 'valueToggle')
  request.r(i879[4], i879[5], 0, i878, 'fieldX')
  request.r(i879[6], i879[7], 0, i878, 'fieldY')
  request.r(i879[8], i879[9], 0, i878, 'fieldZ')
  request.r(i879[10], i879[11], 0, i878, 'fieldW')
  i878.colorDefault = new pc.Color(i879[12], i879[13], i879[14], i879[15])
  i878.colorSelected = new pc.Color(i879[16], i879[17], i879[18], i879[19])
  return i878
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i881 = data
  i880.colorDefault = new pc.Color(i881[0], i881[1], i881[2], i881[3])
  i880.colorSelected = new pc.Color(i881[4], i881[5], i881[6], i881[7])
  return i880
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i883 = data
  i882.m_Spacing = i883[0]
  i882.m_ChildForceExpandWidth = !!i883[1]
  i882.m_ChildForceExpandHeight = !!i883[2]
  i882.m_ChildControlWidth = !!i883[3]
  i882.m_ChildControlHeight = !!i883[4]
  i882.m_ChildScaleWidth = !!i883[5]
  i882.m_ChildScaleHeight = !!i883[6]
  i882.m_ReverseArrangement = !!i883[7]
  i882.m_Padding = UnityEngine.RectOffset.FromPaddings(i883[8], i883[9], i883[10], i883[11])
  i882.m_ChildAlignment = i883[12]
  return i882
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i885 = data
  i884.colorDefault = new pc.Color(i885[0], i885[1], i885[2], i885[3])
  i884.colorSelected = new pc.Color(i885[4], i885[5], i885[6], i885[7])
  return i884
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'nameLabel')
  request.r(i887[2], i887[3], 0, i886, 'header')
  i886.colorDefault = new pc.Color(i887[4], i887[5], i887[6], i887[7])
  i886.colorSelected = new pc.Color(i887[8], i887[9], i887[10], i887[11])
  return i886
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'nameLabel')
  request.r(i889[2], i889[3], 0, i888, 'valueToggle')
  var i891 = i889[4]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 1, i890, '')
  }
  i888.toggles = i890
  i888.colorDefault = new pc.Color(i889[5], i889[6], i889[7], i889[8])
  i888.colorSelected = new pc.Color(i889[9], i889[10], i889[11], i889[12])
  return i888
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'nameLabel')
  request.r(i895[2], i895[3], 0, i894, 'valueToggle')
  request.r(i895[4], i895[5], 0, i894, 'checkmarkImage')
  i894.colorDefault = new pc.Color(i895[6], i895[7], i895[8], i895[9])
  i894.colorSelected = new pc.Color(i895[10], i895[11], i895[12], i895[13])
  return i894
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'nameLabel')
  request.r(i897[2], i897[3], 0, i896, 'valueToggle')
  request.r(i897[4], i897[5], 0, i896, 'checkmarkImage')
  i896.colorDefault = new pc.Color(i897[6], i897[7], i897[8], i897[9])
  i896.colorSelected = new pc.Color(i897[10], i897[11], i897[12], i897[13])
  return i896
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'nextButtonText')
  request.r(i899[2], i899[3], 0, i898, 'previousButtonText')
  request.r(i899[4], i899[5], 0, i898, 'nameLabel')
  request.r(i899[6], i899[7], 0, i898, 'valueLabel')
  i898.colorDefault = new pc.Color(i899[8], i899[9], i899[10], i899[11])
  i898.colorSelected = new pc.Color(i899[12], i899[13], i899[14], i899[15])
  return i898
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'nameLabel')
  request.r(i901[2], i901[3], 0, i900, 'valueToggle')
  i900.colorDefault = new pc.Color(i901[4], i901[5], i901[6], i901[7])
  i900.colorSelected = new pc.Color(i901[8], i901[9], i901[10], i901[11])
  return i900
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'nameLabel')
  i902.colorDefault = new pc.Color(i903[2], i903[3], i903[4], i903[5])
  i902.colorSelected = new pc.Color(i903[6], i903[7], i903[8], i903[9])
  return i902
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'nameLabel')
  request.r(i905[2], i905[3], 0, i904, 'valueLabel')
  request.r(i905[4], i905[5], 0, i904, 'progressBarRect')
  i904.colorDefault = new pc.Color(i905[6], i905[7], i905[8], i905[9])
  i904.colorSelected = new pc.Color(i905[10], i905[11], i905[12], i905[13])
  return i904
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'nameLabel')
  request.r(i907[2], i907[3], 0, i906, 'valueLabel')
  i906.colorDefault = new pc.Color(i907[4], i907[5], i907[6], i907[7])
  i906.colorSelected = new pc.Color(i907[8], i907[9], i907[10], i907[11])
  return i906
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'nameLabel')
  request.r(i909[2], i909[3], 0, i908, 'valueLabel')
  i908.colorDefault = new pc.Color(i909[4], i909[5], i909[6], i909[7])
  i908.colorSelected = new pc.Color(i909[8], i909[9], i909[10], i909[11])
  return i908
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'nextButtonText')
  request.r(i911[2], i911[3], 0, i910, 'previousButtonText')
  request.r(i911[4], i911[5], 0, i910, 'nameLabel')
  request.r(i911[6], i911[7], 0, i910, 'valueLabel')
  i910.colorDefault = new pc.Color(i911[8], i911[9], i911[10], i911[11])
  i910.colorSelected = new pc.Color(i911[12], i911[13], i911[14], i911[15])
  return i910
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'nextButtonText')
  request.r(i913[2], i913[3], 0, i912, 'previousButtonText')
  request.r(i913[4], i913[5], 0, i912, 'nameLabel')
  request.r(i913[6], i913[7], 0, i912, 'valueLabel')
  i912.colorDefault = new pc.Color(i913[8], i913[9], i913[10], i913[11])
  i912.colorSelected = new pc.Color(i913[12], i913[13], i913[14], i913[15])
  return i912
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'panel')
  request.r(i915[2], i915[3], 0, i914, 'valuePrefab')
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i917 = data
  i916.AdditionalLightsPerObjectLimit = i917[0]
  i916.AdditionalLightsRenderingMode = i917[1]
  i916.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i917[2], i916.LightRenderingMode)
  i916.ColorGradingLutSize = i917[3]
  i916.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i917[4], i916.ColorGradingMode)
  i916.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i917[5], i916.MainLightRenderingMode)
  i916.MainLightRenderingModeValue = i917[6]
  i916.SupportsMainLightShadows = !!i917[7]
  i916.MixedLightingSupported = !!i917[8]
  i916.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i917[9], i916.MsaaQuality)
  i916.MSAA = i917[10]
  i916.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i917[11], i916.OpaqueDownsampling)
  i916.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i917[12], i916.MainLightShadowmapResolution)
  i916.MainLightShadowmapResolutionValue = i917[13]
  i916.SupportsSoftShadows = !!i917[14]
  i916.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i917[15], i916.SoftShadowQuality)
  i916.SoftShadowQualityValue = i917[16]
  i916.ShadowDistance = i917[17]
  i916.ShadowCascadeCount = i917[18]
  i916.Cascade2Split = i917[19]
  i916.Cascade3Split = new pc.Vec2( i917[20], i917[21] )
  i916.Cascade4Split = new pc.Vec3( i917[22], i917[23], i917[24] )
  i916.CascadeBorder = i917[25]
  i916.ShadowDepthBias = i917[26]
  i916.ShadowNormalBias = i917[27]
  i916.RenderScale = i917[28]
  i916.RequireDepthTexture = !!i917[29]
  i916.RequireOpaqueTexture = !!i917[30]
  i916.SupportsHDR = !!i917[31]
  i916.SupportsTerrainHoles = !!i917[32]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i919 = data
  i918.Disabled = i919[0]
  i918.PerVertex = i919[1]
  i918.PerPixel = i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i921 = data
  i920.LowDynamicRange = i921[0]
  i920.HighDynamicRange = i921[1]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i923 = data
  i922.Disabled = i923[0]
  i922._2x = i923[1]
  i922._4x = i923[2]
  i922._8x = i923[3]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i925 = data
  i924.None = i925[0]
  i924._2xBilinear = i925[1]
  i924._4xBox = i925[2]
  i924._4xBilinear = i925[3]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i927 = data
  i926._256 = i927[0]
  i926._512 = i927[1]
  i926._1024 = i927[2]
  i926._2048 = i927[3]
  i926._4096 = i927[4]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i929 = data
  i928.UsePipelineSettings = i929[0]
  i928.Low = i929[1]
  i928.Medium = i929[2]
  i928.High = i929[3]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i931 = data
  var i933 = i931[0]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i933[i + 0]));
  }
  i930.ShaderCompilationErrors = i932
  i930.name = i931[1]
  i930.guid = i931[2]
  var i935 = i931[3]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( i935[i + 0] );
  }
  i930.shaderDefinedKeywords = i934
  var i937 = i931[4]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i937[i + 0]) );
  }
  i930.passes = i936
  var i939 = i931[5]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i939[i + 0]) );
  }
  i930.usePasses = i938
  var i941 = i931[6]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i941[i + 0]) );
  }
  i930.defaultParameterValues = i940
  request.r(i931[7], i931[8], 0, i930, 'unityFallbackShader')
  i930.readDepth = !!i931[9]
  i930.isCreatedByShaderGraph = !!i931[10]
  i930.compiled = !!i931[11]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i945 = data
  i944.shaderName = i945[0]
  i944.errorMessage = i945[1]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i950 = root || new pc.UnityShaderPass()
  var i951 = data
  i950.id = i951[0]
  i950.subShaderIndex = i951[1]
  i950.name = i951[2]
  i950.passType = i951[3]
  i950.grabPassTextureName = i951[4]
  i950.usePass = !!i951[5]
  i950.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[6], i950.zTest)
  i950.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[7], i950.zWrite)
  i950.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[8], i950.culling)
  i950.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i951[9], i950.blending)
  i950.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i951[10], i950.alphaBlending)
  i950.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[11], i950.colorWriteMask)
  i950.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[12], i950.offsetUnits)
  i950.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[13], i950.offsetFactor)
  i950.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[14], i950.stencilRef)
  i950.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[15], i950.stencilReadMask)
  i950.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[16], i950.stencilWriteMask)
  i950.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i951[17], i950.stencilOp)
  i950.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i951[18], i950.stencilOpFront)
  i950.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i951[19], i950.stencilOpBack)
  var i953 = i951[20]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i953[i + 0]) );
  }
  i950.tags = i952
  var i955 = i951[21]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( i955[i + 0] );
  }
  i950.passDefinedKeywords = i954
  var i957 = i951[22]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i957[i + 0]) );
  }
  i950.passDefinedKeywordGroups = i956
  var i959 = i951[23]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i959[i + 0]) );
  }
  i950.variants = i958
  var i961 = i951[24]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i961[i + 0]) );
  }
  i950.excludedVariants = i960
  i950.hasDepthReader = !!i951[25]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i963 = data
  i962.val = i963[0]
  i962.name = i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i965 = data
  i964.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i965[0], i964.src)
  i964.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i965[1], i964.dst)
  i964.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i965[2], i964.op)
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i967 = data
  i966.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[0], i966.pass)
  i966.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[1], i966.fail)
  i966.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[2], i966.zFail)
  i966.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[3], i966.comp)
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i971 = data
  i970.name = i971[0]
  i970.value = i971[1]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i975 = data
  var i977 = i975[0]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( i977[i + 0] );
  }
  i974.keywords = i976
  i974.hasDiscard = !!i975[1]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i981 = data
  i980.passId = i981[0]
  i980.subShaderIndex = i981[1]
  var i983 = i981[2]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( i983[i + 0] );
  }
  i980.keywords = i982
  i980.vertexProgram = i981[3]
  i980.fragmentProgram = i981[4]
  i980.exportedForWebGl2 = !!i981[5]
  i980.readDepth = !!i981[6]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'shader')
  i986.pass = i987[2]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i991 = data
  i990.name = i991[0]
  i990.type = i991[1]
  i990.value = new pc.Vec4( i991[2], i991[3], i991[4], i991[5] )
  i990.textureValue = i991[6]
  i990.shaderPropertyFlag = i991[7]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i993 = data
  i992.name = i993[0]
  request.r(i993[1], i993[2], 0, i992, 'texture')
  i992.aabb = i993[3]
  i992.vertices = i993[4]
  i992.triangles = i993[5]
  i992.textureRect = UnityEngine.Rect.MinMaxRect(i993[6], i993[7], i993[8], i993[9])
  i992.packedRect = UnityEngine.Rect.MinMaxRect(i993[10], i993[11], i993[12], i993[13])
  i992.border = new pc.Vec4( i993[14], i993[15], i993[16], i993[17] )
  i992.transparency = i993[18]
  i992.bounds = i993[19]
  i992.pixelsPerUnit = i993[20]
  i992.textureWidth = i993[21]
  i992.textureHeight = i993[22]
  i992.nativeSize = new pc.Vec2( i993[23], i993[24] )
  i992.pivot = new pc.Vec2( i993[25], i993[26] )
  i992.textureRectOffset = new pc.Vec2( i993[27], i993[28] )
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i995 = data
  i994.name = i995[0]
  i994.ascent = i995[1]
  i994.originalLineHeight = i995[2]
  i994.fontSize = i995[3]
  var i997 = i995[4]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i997[i + 0]) );
  }
  i994.characterInfo = i996
  request.r(i995[5], i995[6], 0, i994, 'texture')
  i994.originalFontSize = i995[7]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1001 = data
  i1000.index = i1001[0]
  i1000.advance = i1001[1]
  i1000.bearing = i1001[2]
  i1000.glyphWidth = i1001[3]
  i1000.glyphHeight = i1001[4]
  i1000.minX = i1001[5]
  i1000.maxX = i1001[6]
  i1000.minY = i1001[7]
  i1000.maxY = i1001[8]
  i1000.uvBottomLeftX = i1001[9]
  i1000.uvBottomLeftY = i1001[10]
  i1000.uvBottomRightX = i1001[11]
  i1000.uvBottomRightY = i1001[12]
  i1000.uvTopLeftX = i1001[13]
  i1000.uvTopLeftY = i1001[14]
  i1000.uvTopRightX = i1001[15]
  i1000.uvTopRightY = i1001[16]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.bytes64 = i1003[1]
  i1002.data = i1003[2]
  return i1002
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1005 = data
  i1004.hashCode = i1005[0]
  request.r(i1005[1], i1005[2], 0, i1004, 'material')
  i1004.materialHashCode = i1005[3]
  request.r(i1005[4], i1005[5], 0, i1004, 'atlas')
  i1004.normalStyle = i1005[6]
  i1004.normalSpacingOffset = i1005[7]
  i1004.boldStyle = i1005[8]
  i1004.boldSpacing = i1005[9]
  i1004.italicStyle = i1005[10]
  i1004.tabSize = i1005[11]
  i1004.m_Version = i1005[12]
  i1004.m_SourceFontFileGUID = i1005[13]
  request.r(i1005[14], i1005[15], 0, i1004, 'm_SourceFontFile_EditorRef')
  request.r(i1005[16], i1005[17], 0, i1004, 'm_SourceFontFile')
  i1004.m_AtlasPopulationMode = i1005[18]
  i1004.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1005[19], i1004.m_FaceInfo)
  var i1007 = i1005[20]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.add(request.d('UnityEngine.TextCore.Glyph', i1007[i + 0]));
  }
  i1004.m_GlyphTable = i1006
  var i1009 = i1005[21]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('TMPro.TMP_Character', i1009[i + 0]));
  }
  i1004.m_CharacterTable = i1008
  var i1011 = i1005[22]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1004.m_AtlasTextures = i1010
  i1004.m_AtlasTextureIndex = i1005[23]
  i1004.m_IsMultiAtlasTexturesEnabled = !!i1005[24]
  i1004.m_ClearDynamicDataOnBuild = !!i1005[25]
  var i1013 = i1005[26]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('UnityEngine.TextCore.GlyphRect', i1013[i + 0]));
  }
  i1004.m_UsedGlyphRects = i1012
  var i1015 = i1005[27]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.add(request.d('UnityEngine.TextCore.GlyphRect', i1015[i + 0]));
  }
  i1004.m_FreeGlyphRects = i1014
  i1004.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1005[28], i1004.m_fontInfo)
  i1004.m_AtlasWidth = i1005[29]
  i1004.m_AtlasHeight = i1005[30]
  i1004.m_AtlasPadding = i1005[31]
  i1004.m_AtlasRenderMode = i1005[32]
  var i1017 = i1005[33]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.add(request.d('TMPro.TMP_Glyph', i1017[i + 0]));
  }
  i1004.m_glyphInfoList = i1016
  i1004.m_KerningTable = request.d('TMPro.KerningTable', i1005[34], i1004.m_KerningTable)
  i1004.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1005[35], i1004.m_FontFeatureTable)
  var i1019 = i1005[36]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 1, i1018, '')
  }
  i1004.fallbackFontAssets = i1018
  var i1021 = i1005[37]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1004.m_FallbackFontAssetTable = i1020
  i1004.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1005[38], i1004.m_CreationSettings)
  var i1023 = i1005[39]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('TMPro.TMP_FontWeightPair', i1023[i + 0]) );
  }
  i1004.m_FontWeightTable = i1022
  var i1025 = i1005[40]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('TMPro.TMP_FontWeightPair', i1025[i + 0]) );
  }
  i1004.fontWeights = i1024
  return i1004
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1027 = data
  i1026.m_FaceIndex = i1027[0]
  i1026.m_FamilyName = i1027[1]
  i1026.m_StyleName = i1027[2]
  i1026.m_PointSize = i1027[3]
  i1026.m_Scale = i1027[4]
  i1026.m_UnitsPerEM = i1027[5]
  i1026.m_LineHeight = i1027[6]
  i1026.m_AscentLine = i1027[7]
  i1026.m_CapLine = i1027[8]
  i1026.m_MeanLine = i1027[9]
  i1026.m_Baseline = i1027[10]
  i1026.m_DescentLine = i1027[11]
  i1026.m_SuperscriptOffset = i1027[12]
  i1026.m_SuperscriptSize = i1027[13]
  i1026.m_SubscriptOffset = i1027[14]
  i1026.m_SubscriptSize = i1027[15]
  i1026.m_UnderlineOffset = i1027[16]
  i1026.m_UnderlineThickness = i1027[17]
  i1026.m_StrikethroughOffset = i1027[18]
  i1026.m_StrikethroughThickness = i1027[19]
  i1026.m_TabWidth = i1027[20]
  return i1026
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1031 = data
  i1030.m_Index = i1031[0]
  i1030.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1031[1], i1030.m_Metrics)
  i1030.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1031[2], i1030.m_GlyphRect)
  i1030.m_Scale = i1031[3]
  i1030.m_AtlasIndex = i1031[4]
  i1030.m_ClassDefinitionType = i1031[5]
  return i1030
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1033 = data
  i1032.m_Width = i1033[0]
  i1032.m_Height = i1033[1]
  i1032.m_HorizontalBearingX = i1033[2]
  i1032.m_HorizontalBearingY = i1033[3]
  i1032.m_HorizontalAdvance = i1033[4]
  return i1032
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1035 = data
  i1034.m_X = i1035[0]
  i1034.m_Y = i1035[1]
  i1034.m_Width = i1035[2]
  i1034.m_Height = i1035[3]
  return i1034
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_Character' )
  var i1039 = data
  i1038.m_ElementType = i1039[0]
  i1038.m_Unicode = i1039[1]
  i1038.m_GlyphIndex = i1039[2]
  i1038.m_Scale = i1039[3]
  return i1038
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1045 = data
  i1044.Name = i1045[0]
  i1044.PointSize = i1045[1]
  i1044.Scale = i1045[2]
  i1044.CharacterCount = i1045[3]
  i1044.LineHeight = i1045[4]
  i1044.Baseline = i1045[5]
  i1044.Ascender = i1045[6]
  i1044.CapHeight = i1045[7]
  i1044.Descender = i1045[8]
  i1044.CenterLine = i1045[9]
  i1044.SuperscriptOffset = i1045[10]
  i1044.SubscriptOffset = i1045[11]
  i1044.SubSize = i1045[12]
  i1044.Underline = i1045[13]
  i1044.UnderlineThickness = i1045[14]
  i1044.strikethrough = i1045[15]
  i1044.strikethroughThickness = i1045[16]
  i1044.TabWidth = i1045[17]
  i1044.Padding = i1045[18]
  i1044.AtlasWidth = i1045[19]
  i1044.AtlasHeight = i1045[20]
  return i1044
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1048 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1049 = data
  i1048.id = i1049[0]
  i1048.x = i1049[1]
  i1048.y = i1049[2]
  i1048.width = i1049[3]
  i1048.height = i1049[4]
  i1048.xOffset = i1049[5]
  i1048.yOffset = i1049[6]
  i1048.xAdvance = i1049[7]
  i1048.scale = i1049[8]
  return i1048
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.KerningTable' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('TMPro.KerningPair', i1053[i + 0]));
  }
  i1050.kerningPairs = i1052
  return i1050
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.KerningPair' )
  var i1057 = data
  i1056.xOffset = i1057[0]
  i1056.m_FirstGlyph = i1057[1]
  i1056.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1057[2], i1056.m_FirstGlyphAdjustments)
  i1056.m_SecondGlyph = i1057[3]
  i1056.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1057[4], i1056.m_SecondGlyphAdjustments)
  i1056.m_IgnoreSpacingAdjustments = !!i1057[5]
  return i1056
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1061[i + 0]));
  }
  i1058.m_GlyphPairAdjustmentRecords = i1060
  return i1058
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1065 = data
  i1064.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1065[0], i1064.m_FirstAdjustmentRecord)
  i1064.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1065[1], i1064.m_SecondAdjustmentRecord)
  i1064.m_FeatureLookupFlags = i1065[2]
  return i1064
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1067 = data
  i1066.m_GlyphIndex = i1067[0]
  i1066.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1067[1], i1066.m_GlyphValueRecord)
  return i1066
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1069 = data
  i1068.m_XPlacement = i1069[0]
  i1068.m_YPlacement = i1069[1]
  i1068.m_XAdvance = i1069[2]
  i1068.m_YAdvance = i1069[3]
  return i1068
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1072 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1073 = data
  i1072.sourceFontFileName = i1073[0]
  i1072.sourceFontFileGUID = i1073[1]
  i1072.pointSizeSamplingMode = i1073[2]
  i1072.pointSize = i1073[3]
  i1072.padding = i1073[4]
  i1072.packingMode = i1073[5]
  i1072.atlasWidth = i1073[6]
  i1072.atlasHeight = i1073[7]
  i1072.characterSetSelectionMode = i1073[8]
  i1072.characterSequence = i1073[9]
  i1072.referencedFontAssetGUID = i1073[10]
  i1072.referencedTextAssetGUID = i1073[11]
  i1072.fontStyle = i1073[12]
  i1072.fontStyleModifier = i1073[13]
  i1072.renderMode = i1073[14]
  i1072.includeFontFeatures = !!i1073[15]
  return i1072
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1076 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'regularTypeface')
  request.r(i1077[2], i1077[3], 0, i1076, 'italicTypeface')
  return i1076
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 1, i1080, '')
  }
  i1078.components = i1080
  return i1078
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1085 = data
  i1084.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1085[0], i1084.mode)
  i1084.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1085[1], i1084.neutralHDRRangeReductionMode)
  i1084.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1085[2], i1084.acesPreset)
  i1084.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1085[3], i1084.hueShiftAmount)
  i1084.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1085[4], i1084.detectPaperWhite)
  i1084.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1085[5], i1084.paperWhite)
  i1084.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1085[6], i1084.detectBrightnessLimits)
  i1084.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1085[7], i1084.minNits)
  i1084.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1085[8], i1084.maxNits)
  i1084.active = !!i1085[9]
  return i1084
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1087 = data
  i1086.m_Value = i1087[0]
  i1086.m_OverrideState = !!i1087[1]
  return i1086
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1089 = data
  i1088.m_Value = i1089[0]
  i1088.m_OverrideState = !!i1089[1]
  return i1088
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1091 = data
  i1090.m_Value = i1091[0]
  i1090.m_OverrideState = !!i1091[1]
  return i1090
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1093 = data
  i1092.m_Value = i1093[0]
  i1092.m_OverrideState = !!i1093[1]
  return i1092
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1095 = data
  i1094.m_Value = !!i1095[0]
  i1094.m_OverrideState = !!i1095[1]
  return i1094
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1097 = data
  i1096.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1097[0], i1096.skipIterations)
  i1096.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1097[1], i1096.threshold)
  i1096.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1097[2], i1096.intensity)
  i1096.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1097[3], i1096.scatter)
  i1096.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1097[4], i1096.clamp)
  i1096.tint = request.d('UnityEngine.Rendering.ColorParameter', i1097[5], i1096.tint)
  i1096.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1097[6], i1096.highQualityFiltering)
  i1096.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1097[7], i1096.downscale)
  i1096.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1097[8], i1096.maxIterations)
  i1096.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1097[9], i1096.dirtTexture)
  i1096.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1097[10], i1096.dirtIntensity)
  i1096.active = !!i1097[11]
  return i1096
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1099 = data
  i1098.m_Value = i1099[0]
  i1098.m_OverrideState = !!i1099[1]
  return i1098
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1101 = data
  i1100.m_Value = i1101[0]
  i1100.m_OverrideState = !!i1101[1]
  return i1100
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1103 = data
  i1102.m_Value = new pc.Color(i1103[0], i1103[1], i1103[2], i1103[3])
  i1102.m_OverrideState = !!i1103[4]
  return i1102
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1105 = data
  i1104.m_Value = i1105[0]
  i1104.m_OverrideState = !!i1105[1]
  return i1104
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1107 = data
  i1106.dimension = i1107[0]
  request.r(i1107[1], i1107[2], 0, i1106, 'm_Value')
  i1106.m_OverrideState = !!i1107[3]
  return i1106
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1109 = data
  i1108.color = request.d('UnityEngine.Rendering.ColorParameter', i1109[0], i1108.color)
  i1108.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1109[1], i1108.center)
  i1108.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1109[2], i1108.intensity)
  i1108.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1109[3], i1108.smoothness)
  i1108.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1109[4], i1108.rounded)
  i1108.active = !!i1109[5]
  return i1108
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1111 = data
  i1110.m_Value = new pc.Vec2( i1111[0], i1111[1] )
  i1110.m_OverrideState = !!i1111[2]
  return i1110
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1112 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1113 = data
  i1112.useSafeMode = !!i1113[0]
  i1112.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1113[1], i1112.safeModeOptions)
  i1112.timeScale = i1113[2]
  i1112.unscaledTimeScale = i1113[3]
  i1112.useSmoothDeltaTime = !!i1113[4]
  i1112.maxSmoothUnscaledTime = i1113[5]
  i1112.rewindCallbackMode = i1113[6]
  i1112.showUnityEditorReport = !!i1113[7]
  i1112.logBehaviour = i1113[8]
  i1112.drawGizmos = !!i1113[9]
  i1112.defaultRecyclable = !!i1113[10]
  i1112.defaultAutoPlay = i1113[11]
  i1112.defaultUpdateType = i1113[12]
  i1112.defaultTimeScaleIndependent = !!i1113[13]
  i1112.defaultEaseType = i1113[14]
  i1112.defaultEaseOvershootOrAmplitude = i1113[15]
  i1112.defaultEasePeriod = i1113[16]
  i1112.defaultAutoKill = !!i1113[17]
  i1112.defaultLoopType = i1113[18]
  i1112.debugMode = !!i1113[19]
  i1112.debugStoreTargetId = !!i1113[20]
  i1112.showPreviewPanel = !!i1113[21]
  i1112.storeSettingsLocation = i1113[22]
  i1112.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1113[23], i1112.modules)
  i1112.createASMDEF = !!i1113[24]
  i1112.showPlayingTweens = !!i1113[25]
  i1112.showPausedTweens = !!i1113[26]
  return i1112
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1114 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1115 = data
  i1114.logBehaviour = i1115[0]
  i1114.nestedTweenFailureBehaviour = i1115[1]
  return i1114
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1116 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1117 = data
  i1116.showPanel = !!i1117[0]
  i1116.audioEnabled = !!i1117[1]
  i1116.physicsEnabled = !!i1117[2]
  i1116.physics2DEnabled = !!i1117[3]
  i1116.spriteEnabled = !!i1117[4]
  i1116.uiEnabled = !!i1117[5]
  i1116.textMeshProEnabled = !!i1117[6]
  i1116.tk2DEnabled = !!i1117[7]
  i1116.deAudioEnabled = !!i1117[8]
  i1116.deUnityExtendedEnabled = !!i1117[9]
  i1116.epoOutlineEnabled = !!i1117[10]
  return i1116
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_Settings' )
  var i1119 = data
  i1118.m_enableWordWrapping = !!i1119[0]
  i1118.m_enableKerning = !!i1119[1]
  i1118.m_enableExtraPadding = !!i1119[2]
  i1118.m_enableTintAllSprites = !!i1119[3]
  i1118.m_enableParseEscapeCharacters = !!i1119[4]
  i1118.m_EnableRaycastTarget = !!i1119[5]
  i1118.m_GetFontFeaturesAtRuntime = !!i1119[6]
  i1118.m_missingGlyphCharacter = i1119[7]
  i1118.m_warningsDisabled = !!i1119[8]
  request.r(i1119[9], i1119[10], 0, i1118, 'm_defaultFontAsset')
  i1118.m_defaultFontAssetPath = i1119[11]
  i1118.m_defaultFontSize = i1119[12]
  i1118.m_defaultAutoSizeMinRatio = i1119[13]
  i1118.m_defaultAutoSizeMaxRatio = i1119[14]
  i1118.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1119[15], i1119[16] )
  i1118.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1119[17], i1119[18] )
  i1118.m_autoSizeTextContainer = !!i1119[19]
  i1118.m_IsTextObjectScaleStatic = !!i1119[20]
  var i1121 = i1119[21]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 1, i1120, '')
  }
  i1118.m_fallbackFontAssets = i1120
  i1118.m_matchMaterialPreset = !!i1119[22]
  request.r(i1119[23], i1119[24], 0, i1118, 'm_defaultSpriteAsset')
  i1118.m_defaultSpriteAssetPath = i1119[25]
  i1118.m_enableEmojiSupport = !!i1119[26]
  i1118.m_MissingCharacterSpriteUnicode = i1119[27]
  i1118.m_defaultColorGradientPresetsPath = i1119[28]
  request.r(i1119[29], i1119[30], 0, i1118, 'm_defaultStyleSheet')
  i1118.m_StyleSheetsResourcePath = i1119[31]
  request.r(i1119[32], i1119[33], 0, i1118, 'm_leadingCharacters')
  request.r(i1119[34], i1119[35], 0, i1118, 'm_followingCharacters')
  i1118.m_UseModernHangulLineBreakingRules = !!i1119[36]
  return i1118
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1122 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1123 = data
  i1122.hashCode = i1123[0]
  request.r(i1123[1], i1123[2], 0, i1122, 'material')
  i1122.materialHashCode = i1123[3]
  request.r(i1123[4], i1123[5], 0, i1122, 'spriteSheet')
  var i1125 = i1123[6]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('TMPro.TMP_Sprite', i1125[i + 0]));
  }
  i1122.spriteInfoList = i1124
  var i1127 = i1123[7]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1127.length; i += 2) {
  request.r(i1127[i + 0], i1127[i + 1], 1, i1126, '')
  }
  i1122.fallbackSpriteAssets = i1126
  i1122.m_Version = i1123[8]
  i1122.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1123[9], i1122.m_FaceInfo)
  var i1129 = i1123[10]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('TMPro.TMP_SpriteCharacter', i1129[i + 0]));
  }
  i1122.m_SpriteCharacterTable = i1128
  var i1131 = i1123[11]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('TMPro.TMP_SpriteGlyph', i1131[i + 0]));
  }
  i1122.m_SpriteGlyphTable = i1130
  return i1122
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1135 = data
  i1134.name = i1135[0]
  i1134.hashCode = i1135[1]
  i1134.unicode = i1135[2]
  i1134.pivot = new pc.Vec2( i1135[3], i1135[4] )
  request.r(i1135[5], i1135[6], 0, i1134, 'sprite')
  i1134.id = i1135[7]
  i1134.x = i1135[8]
  i1134.y = i1135[9]
  i1134.width = i1135[10]
  i1134.height = i1135[11]
  i1134.xOffset = i1135[12]
  i1134.yOffset = i1135[13]
  i1134.xAdvance = i1135[14]
  i1134.scale = i1135[15]
  return i1134
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1141 = data
  i1140.m_Name = i1141[0]
  i1140.m_HashCode = i1141[1]
  i1140.m_ElementType = i1141[2]
  i1140.m_Unicode = i1141[3]
  i1140.m_GlyphIndex = i1141[4]
  i1140.m_Scale = i1141[5]
  return i1140
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'sprite')
  i1144.m_Index = i1145[2]
  i1144.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1145[3], i1144.m_Metrics)
  i1144.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1145[4], i1144.m_GlyphRect)
  i1144.m_Scale = i1145[5]
  i1144.m_AtlasIndex = i1145[6]
  i1144.m_ClassDefinitionType = i1145[7]
  return i1144
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('TMPro.TMP_Style', i1149[i + 0]));
  }
  i1146.m_StyleList = i1148
  return i1146
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.TMP_Style' )
  var i1153 = data
  i1152.m_Name = i1153[0]
  i1152.m_HashCode = i1153[1]
  i1152.m_OpeningDefinition = i1153[2]
  i1152.m_ClosingDefinition = i1153[3]
  i1152.m_OpeningTagArray = i1153[4]
  i1152.m_ClosingTagArray = i1153[5]
  i1152.m_OpeningTagUnicodeArray = i1153[6]
  i1152.m_ClosingTagUnicodeArray = i1153[7]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1155 = data
  var i1157 = i1155[0]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1157[i + 0]) );
  }
  i1154.files = i1156
  i1154.componentToPrefabIds = i1155[1]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1161 = data
  i1160.path = i1161[0]
  request.r(i1161[1], i1161[2], 0, i1160, 'unityObject')
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1163 = data
  var i1165 = i1163[0]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1165[i + 0]) );
  }
  i1162.scriptsExecutionOrder = i1164
  var i1167 = i1163[1]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1167[i + 0]) );
  }
  i1162.sortingLayers = i1166
  var i1169 = i1163[2]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1169[i + 0]) );
  }
  i1162.cullingLayers = i1168
  i1162.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1163[3], i1162.timeSettings)
  i1162.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1163[4], i1162.physicsSettings)
  i1162.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1163[5], i1162.physics2DSettings)
  i1162.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1163[6], i1162.qualitySettings)
  i1162.enableRealtimeShadows = !!i1163[7]
  i1162.enableAutoInstancing = !!i1163[8]
  i1162.enableDynamicBatching = !!i1163[9]
  i1162.lightmapEncodingQuality = i1163[10]
  i1162.desiredColorSpace = i1163[11]
  var i1171 = i1163[12]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( i1171[i + 0] );
  }
  i1162.allTags = i1170
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1175 = data
  i1174.name = i1175[0]
  i1174.value = i1175[1]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1179 = data
  i1178.id = i1179[0]
  i1178.name = i1179[1]
  i1178.value = i1179[2]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1183 = data
  i1182.id = i1183[0]
  i1182.name = i1183[1]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1185 = data
  i1184.fixedDeltaTime = i1185[0]
  i1184.maximumDeltaTime = i1185[1]
  i1184.timeScale = i1185[2]
  i1184.maximumParticleTimestep = i1185[3]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1187 = data
  i1186.gravity = new pc.Vec3( i1187[0], i1187[1], i1187[2] )
  i1186.defaultSolverIterations = i1187[3]
  i1186.bounceThreshold = i1187[4]
  i1186.autoSyncTransforms = !!i1187[5]
  i1186.autoSimulation = !!i1187[6]
  var i1189 = i1187[7]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1189[i + 0]) );
  }
  i1186.collisionMatrix = i1188
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1193 = data
  i1192.enabled = !!i1193[0]
  i1192.layerId = i1193[1]
  i1192.otherLayerId = i1193[2]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'material')
  i1194.gravity = new pc.Vec2( i1195[2], i1195[3] )
  i1194.positionIterations = i1195[4]
  i1194.velocityIterations = i1195[5]
  i1194.velocityThreshold = i1195[6]
  i1194.maxLinearCorrection = i1195[7]
  i1194.maxAngularCorrection = i1195[8]
  i1194.maxTranslationSpeed = i1195[9]
  i1194.maxRotationSpeed = i1195[10]
  i1194.baumgarteScale = i1195[11]
  i1194.baumgarteTOIScale = i1195[12]
  i1194.timeToSleep = i1195[13]
  i1194.linearSleepTolerance = i1195[14]
  i1194.angularSleepTolerance = i1195[15]
  i1194.defaultContactOffset = i1195[16]
  i1194.autoSimulation = !!i1195[17]
  i1194.queriesHitTriggers = !!i1195[18]
  i1194.queriesStartInColliders = !!i1195[19]
  i1194.callbacksOnDisable = !!i1195[20]
  i1194.reuseCollisionCallbacks = !!i1195[21]
  i1194.autoSyncTransforms = !!i1195[22]
  var i1197 = i1195[23]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1197[i + 0]) );
  }
  i1194.collisionMatrix = i1196
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1201 = data
  i1200.enabled = !!i1201[0]
  i1200.layerId = i1201[1]
  i1200.otherLayerId = i1201[2]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1203 = data
  var i1205 = i1203[0]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1205[i + 0]) );
  }
  i1202.qualityLevels = i1204
  var i1207 = i1203[1]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( i1207[i + 0] );
  }
  i1202.names = i1206
  i1202.shadows = i1203[2]
  i1202.anisotropicFiltering = i1203[3]
  i1202.antiAliasing = i1203[4]
  i1202.lodBias = i1203[5]
  i1202.shadowCascades = i1203[6]
  i1202.shadowDistance = i1203[7]
  i1202.shadowmaskMode = i1203[8]
  i1202.shadowProjection = i1203[9]
  i1202.shadowResolution = i1203[10]
  i1202.softParticles = !!i1203[11]
  i1202.softVegetation = !!i1203[12]
  i1202.activeColorSpace = i1203[13]
  i1202.desiredColorSpace = i1203[14]
  i1202.masterTextureLimit = i1203[15]
  i1202.maxQueuedFrames = i1203[16]
  i1202.particleRaycastBudget = i1203[17]
  i1202.pixelLightCount = i1203[18]
  i1202.realtimeReflectionProbes = !!i1203[19]
  i1202.shadowCascade2Split = i1203[20]
  i1202.shadowCascade4Split = new pc.Vec3( i1203[21], i1203[22], i1203[23] )
  i1202.streamingMipmapsActive = !!i1203[24]
  i1202.vSyncCount = i1203[25]
  i1202.asyncUploadBufferSize = i1203[26]
  i1202.asyncUploadTimeSlice = i1203[27]
  i1202.billboardsFaceCameraPosition = !!i1203[28]
  i1202.shadowNearPlaneOffset = i1203[29]
  i1202.streamingMipmapsMemoryBudget = i1203[30]
  i1202.maximumLODLevel = i1203[31]
  i1202.streamingMipmapsAddAllCameras = !!i1203[32]
  i1202.streamingMipmapsMaxLevelReduction = i1203[33]
  i1202.streamingMipmapsRenderersPerFrame = i1203[34]
  i1202.resolutionScalingFixedDPIFactor = i1203[35]
  i1202.streamingMipmapsMaxFileIORequests = i1203[36]
  i1202.currentQualityLevel = i1203[37]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1213 = data
  i1212.weight = i1213[0]
  i1212.vertices = i1213[1]
  i1212.normals = i1213[2]
  i1212.tangents = i1213[3]
  return i1212
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1215 = data
  i1214.xPlacement = i1215[0]
  i1214.yPlacement = i1215[1]
  i1214.xAdvance = i1215[2]
  i1214.yAdvance = i1215[3]
  return i1214
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[96],"97":[11],"98":[99],"100":[99],"101":[99],"102":[99],"103":[99],"104":[99],"105":[99],"106":[107],"108":[107],"109":[107],"110":[107],"111":[107],"112":[107],"113":[107],"114":[107],"115":[107],"116":[107],"117":[107],"118":[107],"119":[107],"120":[11],"121":[5],"122":[123],"124":[123],"15":[14],"125":[23,126,14],"57":[14],"127":[11],"13":[11],"30":[29],"128":[129],"130":[14],"131":[14],"18":[15],"24":[23,14],"132":[14],"17":[15],"37":[14],"133":[14],"65":[14],"134":[14],"42":[14],"135":[14],"36":[14],"46":[14],"136":[14],"137":[23,14],"138":[14],"45":[14],"41":[14],"22":[14],"40":[23,14],"50":[14],"139":[31],"140":[31],"32":[31],"141":[31],"142":[11],"143":[11],"144":[129],"145":[14],"146":[5,14],"20":[14,23],"147":[14],"148":[23,14],"149":[5],"150":[23,14],"151":[14],"152":[129]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Case","UnityEngine.BoxCollider","Bottle","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TextHint","TMPro.TextMeshProUGUI","TimerSlider","UnityEngine.UI.Slider","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PuzzleManager","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.GameObject","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 19:41:10";

Deserializers.lunaDaysRunning = "0.8";

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

Deserializers.buildID = "f096a117-3f0a-41ce-b748-0581bcdb654b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

