var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointSpring' )
  var i617 = data
  i616.spring = i617[0]
  i616.damper = i617[1]
  i616.targetPosition = i617[2]
  return i616
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointMotor' )
  var i619 = data
  i618.m_TargetVelocity = i619[0]
  i618.m_Force = i619[1]
  i618.m_FreeSpin = i619[2]
  return i618
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointLimits' )
  var i621 = data
  i620.m_Min = i621[0]
  i620.m_Max = i621[1]
  i620.m_Bounciness = i621[2]
  i620.m_BounceMinVelocity = i621[3]
  i620.m_ContactDistance = i621[4]
  i620.minBounce = i621[5]
  i620.maxBounce = i621[6]
  return i620
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointDrive' )
  var i623 = data
  i622.m_PositionSpring = i623[0]
  i622.m_PositionDamper = i623[1]
  i622.m_MaximumForce = i623[2]
  i622.m_UseAcceleration = i623[3]
  return i622
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i625 = data
  i624.m_Spring = i625[0]
  i624.m_Damper = i625[1]
  return i624
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i627 = data
  i626.m_Limit = i627[0]
  i626.m_Bounciness = i627[1]
  i626.m_ContactDistance = i627[2]
  return i626
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i629 = data
  i628.m_ExtremumSlip = i629[0]
  i628.m_ExtremumValue = i629[1]
  i628.m_AsymptoteSlip = i629[2]
  i628.m_AsymptoteValue = i629[3]
  i628.m_Stiffness = i629[4]
  return i628
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i631 = data
  i630.m_LowerAngle = i631[0]
  i630.m_UpperAngle = i631[1]
  return i630
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i633 = data
  i632.m_MotorSpeed = i633[0]
  i632.m_MaximumMotorTorque = i633[1]
  return i632
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i635 = data
  i634.m_DampingRatio = i635[0]
  i634.m_Frequency = i635[1]
  i634.m_Angle = i635[2]
  return i634
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i637 = data
  i636.m_LowerTranslation = i637[0]
  i636.m_UpperTranslation = i637[1]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i639 = data
  i638.position = new pc.Vec3( i639[0], i639[1], i639[2] )
  i638.scale = new pc.Vec3( i639[3], i639[4], i639[5] )
  i638.rotation = new pc.Quat(i639[6], i639[7], i639[8], i639[9])
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'sharedMesh')
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'additionalVertexStreams')
  i642.enabled = !!i643[2]
  request.r(i643[3], i643[4], 0, i642, 'sharedMaterial')
  var i645 = i643[5]
  var i644 = []
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 2, i644, '')
  }
  i642.sharedMaterials = i644
  i642.receiveShadows = !!i643[6]
  i642.shadowCastingMode = i643[7]
  i642.sortingLayerID = i643[8]
  i642.sortingOrder = i643[9]
  i642.lightmapIndex = i643[10]
  i642.lightmapSceneIndex = i643[11]
  i642.lightmapScaleOffset = new pc.Vec4( i643[12], i643[13], i643[14], i643[15] )
  i642.lightProbeUsage = i643[16]
  i642.reflectionProbeUsage = i643[17]
  return i642
}

Deserializers["Case"] = function (request, data, root) {
  var i648 = root || request.c( 'Case' )
  var i649 = data
  i648.lineIndex = i649[0]
  i648.caseColor = new pc.Color(i649[1], i649[2], i649[3], i649[4])
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i651 = data
  i650.name = i651[0]
  i650.tagId = i651[1]
  i650.enabled = !!i651[2]
  i650.isStatic = !!i651[3]
  i650.layer = i651[4]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i653 = data
  i652.name = i653[0]
  i652.halfPrecision = !!i653[1]
  i652.useUInt32IndexFormat = !!i653[2]
  i652.vertexCount = i653[3]
  i652.aabb = i653[4]
  var i655 = i653[5]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( !!i655[i + 0] );
  }
  i652.streams = i654
  i652.vertices = i653[6]
  var i657 = i653[7]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i657[i + 0]) );
  }
  i652.subMeshes = i656
  var i659 = i653[8]
  var i658 = []
  for(var i = 0; i < i659.length; i += 16) {
    i658.push( new pc.Mat4().setData(i659[i + 0], i659[i + 1], i659[i + 2], i659[i + 3],  i659[i + 4], i659[i + 5], i659[i + 6], i659[i + 7],  i659[i + 8], i659[i + 9], i659[i + 10], i659[i + 11],  i659[i + 12], i659[i + 13], i659[i + 14], i659[i + 15]) );
  }
  i652.bindposes = i658
  var i661 = i653[9]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i661[i + 0]) );
  }
  i652.blendShapes = i660
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i667 = data
  i666.triangles = i667[0]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i673 = data
  i672.name = i673[0]
  var i675 = i673[1]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i675[i + 0]) );
  }
  i672.frames = i674
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i676 = root || new pc.UnityMaterial()
  var i677 = data
  i676.name = i677[0]
  request.r(i677[1], i677[2], 0, i676, 'shader')
  i676.renderQueue = i677[3]
  i676.enableInstancing = !!i677[4]
  var i679 = i677[5]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i679[i + 0]) );
  }
  i676.floatParameters = i678
  var i681 = i677[6]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i681[i + 0]) );
  }
  i676.colorParameters = i680
  var i683 = i677[7]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i683[i + 0]) );
  }
  i676.vectorParameters = i682
  var i685 = i677[8]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i685[i + 0]) );
  }
  i676.textureParameters = i684
  var i687 = i677[9]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i687[i + 0]) );
  }
  i676.materialFlags = i686
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i691 = data
  i690.name = i691[0]
  i690.value = i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i695 = data
  i694.name = i695[0]
  i694.value = new pc.Color(i695[1], i695[2], i695[3], i695[4])
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i699 = data
  i698.name = i699[0]
  i698.value = new pc.Vec4( i699[1], i699[2], i699[3], i699[4] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i703 = data
  i702.name = i703[0]
  request.r(i703[1], i703[2], 0, i702, 'value')
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i707 = data
  i706.name = i707[0]
  i706.enabled = !!i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i709 = data
  i708.center = new pc.Vec3( i709[0], i709[1], i709[2] )
  i708.size = new pc.Vec3( i709[3], i709[4], i709[5] )
  i708.enabled = !!i709[6]
  i708.isTrigger = !!i709[7]
  request.r(i709[8], i709[9], 0, i708, 'material')
  return i708
}

Deserializers["Bottle"] = function (request, data, root) {
  var i710 = root || request.c( 'Bottle' )
  var i711 = data
  i710.bottleColor = new pc.Color(i711[0], i711[1], i711[2], i711[3])
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i713 = data
  i712.pivot = new pc.Vec2( i713[0], i713[1] )
  i712.anchorMin = new pc.Vec2( i713[2], i713[3] )
  i712.anchorMax = new pc.Vec2( i713[4], i713[5] )
  i712.sizeDelta = new pc.Vec2( i713[6], i713[7] )
  i712.anchoredPosition3D = new pc.Vec3( i713[8], i713[9], i713[10] )
  i712.rotation = new pc.Quat(i713[11], i713[12], i713[13], i713[14])
  i712.scale = new pc.Vec3( i713[15], i713[16], i713[17] )
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i715 = data
  i714.cullTransparentMesh = !!i715[0]
  return i714
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.Image' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'm_Sprite')
  i716.m_Type = i717[2]
  i716.m_PreserveAspect = !!i717[3]
  i716.m_FillCenter = !!i717[4]
  i716.m_FillMethod = i717[5]
  i716.m_FillAmount = i717[6]
  i716.m_FillClockwise = !!i717[7]
  i716.m_FillOrigin = i717[8]
  i716.m_UseSpriteMesh = !!i717[9]
  i716.m_PixelsPerUnitMultiplier = i717[10]
  request.r(i717[11], i717[12], 0, i716, 'm_Material')
  i716.m_Maskable = !!i717[13]
  i716.m_Color = new pc.Color(i717[14], i717[15], i717[16], i717[17])
  i716.m_RaycastTarget = !!i717[18]
  i716.m_RaycastPadding = new pc.Vec4( i717[19], i717[20], i717[21], i717[22] )
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i719 = data
  i718.name = i719[0]
  i718.width = i719[1]
  i718.height = i719[2]
  i718.mipmapCount = i719[3]
  i718.anisoLevel = i719[4]
  i718.filterMode = i719[5]
  i718.hdr = !!i719[6]
  i718.format = i719[7]
  i718.wrapMode = i719[8]
  i718.alphaIsTransparency = !!i719[9]
  i718.alphaSource = i719[10]
  i718.graphicsFormat = i719[11]
  i718.sRGBTexture = !!i719[12]
  i718.desiredColorSpace = i719[13]
  i718.wrapU = i719[14]
  i718.wrapV = i719[15]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i721 = data
  i720.name = i721[0]
  i720.atlasId = i721[1]
  i720.mipmapCount = i721[2]
  i720.hdr = !!i721[3]
  i720.size = i721[4]
  i720.anisoLevel = i721[5]
  i720.filterMode = i721[6]
  var i723 = i721[7]
  var i722 = []
  for(var i = 0; i < i723.length; i += 4) {
    i722.push( UnityEngine.Rect.MinMaxRect(i723[i + 0], i723[i + 1], i723[i + 2], i723[i + 3]) );
  }
  i720.rects = i722
  i720.wrapU = i721[8]
  i720.wrapV = i721[9]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i727 = data
  i726.name = i727[0]
  i726.index = i727[1]
  i726.startup = !!i727[2]
  return i726
}

Deserializers["PuzzleManager"] = function (request, data, root) {
  var i728 = root || request.c( 'PuzzleManager' )
  var i729 = data
  var i731 = i729[0]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('Case')))
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 1, i730, '')
  }
  i728.AllCases = i730
  var i733 = i729[1]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i728.goodEffectPrefabs = i732
  request.r(i729[2], i729[3], 0, i728, 'uiCanvas')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i739 = data
  i738.enabled = !!i739[0]
  i738.aspect = i739[1]
  i738.orthographic = !!i739[2]
  i738.orthographicSize = i739[3]
  i738.backgroundColor = new pc.Color(i739[4], i739[5], i739[6], i739[7])
  i738.nearClipPlane = i739[8]
  i738.farClipPlane = i739[9]
  i738.fieldOfView = i739[10]
  i738.depth = i739[11]
  i738.clearFlags = i739[12]
  i738.cullingMask = i739[13]
  i738.rect = i739[14]
  request.r(i739[15], i739[16], 0, i738, 'targetTexture')
  i738.usePhysicalProperties = !!i739[17]
  i738.focalLength = i739[18]
  i738.sensorSize = new pc.Vec2( i739[19], i739[20] )
  i738.lensShift = new pc.Vec2( i739[21], i739[22] )
  i738.gateFit = i739[23]
  i738.commandBufferCount = i739[24]
  i738.cameraType = i739[25]
  return i738
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i741 = data
  i740.m_RenderShadows = !!i741[0]
  i740.m_RequiresDepthTextureOption = i741[1]
  i740.m_RequiresOpaqueTextureOption = i741[2]
  i740.m_CameraType = i741[3]
  var i743 = i741[4]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 1, i742, '')
  }
  i740.m_Cameras = i742
  i740.m_RendererIndex = i741[5]
  i740.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i741[6] )
  request.r(i741[7], i741[8], 0, i740, 'm_VolumeTrigger')
  i740.m_VolumeFrameworkUpdateModeOption = i741[9]
  i740.m_RenderPostProcessing = !!i741[10]
  i740.m_Antialiasing = i741[11]
  i740.m_AntialiasingQuality = i741[12]
  i740.m_StopNaN = !!i741[13]
  i740.m_Dithering = !!i741[14]
  i740.m_ClearDepth = !!i741[15]
  i740.m_AllowXRRendering = !!i741[16]
  i740.m_AllowHDROutput = !!i741[17]
  i740.m_UseScreenCoordOverride = !!i741[18]
  i740.m_ScreenSizeOverride = new pc.Vec4( i741[19], i741[20], i741[21], i741[22] )
  i740.m_ScreenCoordScaleBias = new pc.Vec4( i741[23], i741[24], i741[25], i741[26] )
  i740.m_RequiresDepthTexture = !!i741[27]
  i740.m_RequiresColorTexture = !!i741[28]
  i740.m_Version = i741[29]
  i740.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i741[30], i740.m_TaaSettings)
  return i740
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i747 = data
  i746.m_Quality = i747[0]
  i746.m_FrameInfluence = i747[1]
  i746.m_JitterScale = i747[2]
  i746.m_MipBias = i747[3]
  i746.m_VarianceClampScale = i747[4]
  i746.m_ContrastAdaptiveSharpening = i747[5]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i749 = data
  i748.enabled = !!i749[0]
  i748.planeDistance = i749[1]
  i748.referencePixelsPerUnit = i749[2]
  i748.isFallbackOverlay = !!i749[3]
  i748.renderMode = i749[4]
  i748.renderOrder = i749[5]
  i748.sortingLayerName = i749[6]
  i748.sortingOrder = i749[7]
  i748.scaleFactor = i749[8]
  request.r(i749[9], i749[10], 0, i748, 'worldCamera')
  i748.overrideSorting = !!i749[11]
  i748.pixelPerfect = !!i749[12]
  i748.targetDisplay = i749[13]
  i748.overridePixelPerfect = !!i749[14]
  return i748
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i751 = data
  i750.m_UiScaleMode = i751[0]
  i750.m_ReferencePixelsPerUnit = i751[1]
  i750.m_ScaleFactor = i751[2]
  i750.m_ReferenceResolution = new pc.Vec2( i751[3], i751[4] )
  i750.m_ScreenMatchMode = i751[5]
  i750.m_MatchWidthOrHeight = i751[6]
  i750.m_PhysicalUnit = i751[7]
  i750.m_FallbackScreenDPI = i751[8]
  i750.m_DefaultSpriteDPI = i751[9]
  i750.m_DynamicPixelsPerUnit = i751[10]
  i750.m_PresetInfoIsWorld = !!i751[11]
  return i750
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i753 = data
  i752.m_IgnoreReversedGraphics = !!i753[0]
  i752.m_BlockingObjects = i753[1]
  i752.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i753[2] )
  return i752
}

Deserializers["UIScaler"] = function (request, data, root) {
  var i754 = root || request.c( 'UIScaler' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'topImage')
  request.r(i755[2], i755[3], 0, i754, 'middleImage')
  request.r(i755[4], i755[5], 0, i754, 'bottomButton')
  i754.aspectThreshold = i755[6]
  return i754
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.Button' )
  var i757 = data
  i756.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i757[0], i756.m_OnClick)
  i756.m_Navigation = request.d('UnityEngine.UI.Navigation', i757[1], i756.m_Navigation)
  i756.m_Transition = i757[2]
  i756.m_Colors = request.d('UnityEngine.UI.ColorBlock', i757[3], i756.m_Colors)
  i756.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i757[4], i756.m_SpriteState)
  i756.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i757[5], i756.m_AnimationTriggers)
  i756.m_Interactable = !!i757[6]
  request.r(i757[7], i757[8], 0, i756, 'm_TargetGraphic')
  return i756
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i759 = data
  i758.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i759[0], i758.m_PersistentCalls)
  return i758
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i761 = data
  var i763 = i761[0]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('UnityEngine.Events.PersistentCall', i763[i + 0]));
  }
  i760.m_Calls = i762
  return i760
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_Target')
  i766.m_TargetAssemblyTypeName = i767[2]
  i766.m_MethodName = i767[3]
  i766.m_Mode = i767[4]
  i766.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i767[5], i766.m_Arguments)
  i766.m_CallState = i767[6]
  return i766
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i769 = data
  i768.m_Mode = i769[0]
  i768.m_WrapAround = !!i769[1]
  request.r(i769[2], i769[3], 0, i768, 'm_SelectOnUp')
  request.r(i769[4], i769[5], 0, i768, 'm_SelectOnDown')
  request.r(i769[6], i769[7], 0, i768, 'm_SelectOnLeft')
  request.r(i769[8], i769[9], 0, i768, 'm_SelectOnRight')
  return i768
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i771 = data
  i770.m_NormalColor = new pc.Color(i771[0], i771[1], i771[2], i771[3])
  i770.m_HighlightedColor = new pc.Color(i771[4], i771[5], i771[6], i771[7])
  i770.m_PressedColor = new pc.Color(i771[8], i771[9], i771[10], i771[11])
  i770.m_SelectedColor = new pc.Color(i771[12], i771[13], i771[14], i771[15])
  i770.m_DisabledColor = new pc.Color(i771[16], i771[17], i771[18], i771[19])
  i770.m_ColorMultiplier = i771[20]
  i770.m_FadeDuration = i771[21]
  return i770
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'm_HighlightedSprite')
  request.r(i773[2], i773[3], 0, i772, 'm_PressedSprite')
  request.r(i773[4], i773[5], 0, i772, 'm_SelectedSprite')
  request.r(i773[6], i773[7], 0, i772, 'm_DisabledSprite')
  return i772
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i775 = data
  i774.m_NormalTrigger = i775[0]
  i774.m_HighlightedTrigger = i775[1]
  i774.m_PressedTrigger = i775[2]
  i774.m_SelectedTrigger = i775[3]
  i774.m_DisabledTrigger = i775[4]
  return i774
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i776 = root || request.c( 'ButtonPulse' )
  var i777 = data
  i776.scaleMultiplier = i777[0]
  i776.duration = i777[1]
  return i776
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i779 = data
  i778.m_hasFontAssetChanged = !!i779[0]
  request.r(i779[1], i779[2], 0, i778, 'm_baseMaterial')
  i778.m_maskOffset = new pc.Vec4( i779[3], i779[4], i779[5], i779[6] )
  i778.m_text = i779[7]
  i778.m_isRightToLeft = !!i779[8]
  request.r(i779[9], i779[10], 0, i778, 'm_fontAsset')
  request.r(i779[11], i779[12], 0, i778, 'm_sharedMaterial')
  var i781 = i779[13]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.m_fontSharedMaterials = i780
  request.r(i779[14], i779[15], 0, i778, 'm_fontMaterial')
  var i783 = i779[16]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i778.m_fontMaterials = i782
  i778.m_fontColor32 = UnityEngine.Color32.ConstructColor(i779[17], i779[18], i779[19], i779[20])
  i778.m_fontColor = new pc.Color(i779[21], i779[22], i779[23], i779[24])
  i778.m_enableVertexGradient = !!i779[25]
  i778.m_colorMode = i779[26]
  i778.m_fontColorGradient = request.d('TMPro.VertexGradient', i779[27], i778.m_fontColorGradient)
  request.r(i779[28], i779[29], 0, i778, 'm_fontColorGradientPreset')
  request.r(i779[30], i779[31], 0, i778, 'm_spriteAsset')
  i778.m_tintAllSprites = !!i779[32]
  request.r(i779[33], i779[34], 0, i778, 'm_StyleSheet')
  i778.m_TextStyleHashCode = i779[35]
  i778.m_overrideHtmlColors = !!i779[36]
  i778.m_faceColor = UnityEngine.Color32.ConstructColor(i779[37], i779[38], i779[39], i779[40])
  i778.m_fontSize = i779[41]
  i778.m_fontSizeBase = i779[42]
  i778.m_fontWeight = i779[43]
  i778.m_enableAutoSizing = !!i779[44]
  i778.m_fontSizeMin = i779[45]
  i778.m_fontSizeMax = i779[46]
  i778.m_fontStyle = i779[47]
  i778.m_HorizontalAlignment = i779[48]
  i778.m_VerticalAlignment = i779[49]
  i778.m_textAlignment = i779[50]
  i778.m_characterSpacing = i779[51]
  i778.m_wordSpacing = i779[52]
  i778.m_lineSpacing = i779[53]
  i778.m_lineSpacingMax = i779[54]
  i778.m_paragraphSpacing = i779[55]
  i778.m_charWidthMaxAdj = i779[56]
  i778.m_enableWordWrapping = !!i779[57]
  i778.m_wordWrappingRatios = i779[58]
  i778.m_overflowMode = i779[59]
  request.r(i779[60], i779[61], 0, i778, 'm_linkedTextComponent')
  request.r(i779[62], i779[63], 0, i778, 'parentLinkedComponent')
  i778.m_enableKerning = !!i779[64]
  i778.m_enableExtraPadding = !!i779[65]
  i778.checkPaddingRequired = !!i779[66]
  i778.m_isRichText = !!i779[67]
  i778.m_parseCtrlCharacters = !!i779[68]
  i778.m_isOrthographic = !!i779[69]
  i778.m_isCullingEnabled = !!i779[70]
  i778.m_horizontalMapping = i779[71]
  i778.m_verticalMapping = i779[72]
  i778.m_uvLineOffset = i779[73]
  i778.m_geometrySortingOrder = i779[74]
  i778.m_IsTextObjectScaleStatic = !!i779[75]
  i778.m_VertexBufferAutoSizeReduction = !!i779[76]
  i778.m_useMaxVisibleDescender = !!i779[77]
  i778.m_pageToDisplay = i779[78]
  i778.m_margin = new pc.Vec4( i779[79], i779[80], i779[81], i779[82] )
  i778.m_isUsingLegacyAnimationComponent = !!i779[83]
  i778.m_isVolumetricText = !!i779[84]
  request.r(i779[85], i779[86], 0, i778, 'm_Material')
  i778.m_Maskable = !!i779[87]
  i778.m_Color = new pc.Color(i779[88], i779[89], i779[90], i779[91])
  i778.m_RaycastTarget = !!i779[92]
  i778.m_RaycastPadding = new pc.Vec4( i779[93], i779[94], i779[95], i779[96] )
  return i778
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i784 = root || request.c( 'TMPro.VertexGradient' )
  var i785 = data
  i784.topLeft = new pc.Color(i785[0], i785[1], i785[2], i785[3])
  i784.topRight = new pc.Color(i785[4], i785[5], i785[6], i785[7])
  i784.bottomLeft = new pc.Color(i785[8], i785[9], i785[10], i785[11])
  i784.bottomRight = new pc.Color(i785[12], i785[13], i785[14], i785[15])
  return i784
}

Deserializers["TextHint"] = function (request, data, root) {
  var i786 = root || request.c( 'TextHint' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'hintText')
  i786.scaleAmount = i787[2]
  i786.duration = i787[3]
  return i786
}

Deserializers["TimerSlider"] = function (request, data, root) {
  var i788 = root || request.c( 'TimerSlider' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'timerSlider')
  i788.totalTime = i789[2]
  request.r(i789[3], i789[4], 0, i788, 'resultPanel')
  return i788
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.Slider' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_FillRect')
  request.r(i791[2], i791[3], 0, i790, 'm_HandleRect')
  i790.m_Direction = i791[4]
  i790.m_MinValue = i791[5]
  i790.m_MaxValue = i791[6]
  i790.m_WholeNumbers = !!i791[7]
  i790.m_Value = i791[8]
  i790.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i791[9], i790.m_OnValueChanged)
  i790.m_Navigation = request.d('UnityEngine.UI.Navigation', i791[10], i790.m_Navigation)
  i790.m_Transition = i791[11]
  i790.m_Colors = request.d('UnityEngine.UI.ColorBlock', i791[12], i790.m_Colors)
  i790.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i791[13], i790.m_SpriteState)
  i790.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i791[14], i790.m_AnimationTriggers)
  i790.m_Interactable = !!i791[15]
  request.r(i791[16], i791[17], 0, i790, 'm_TargetGraphic')
  return i790
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i793 = data
  i792.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i793[0], i792.m_PersistentCalls)
  return i792
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i795 = data
  i794.priority = i795[0]
  i794.blendDistance = i795[1]
  i794.weight = i795[2]
  request.r(i795[3], i795[4], 0, i794, 'sharedProfile')
  i794.m_IsGlobal = !!i795[5]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i797 = data
  i796.enabled = !!i797[0]
  i796.type = i797[1]
  i796.color = new pc.Color(i797[2], i797[3], i797[4], i797[5])
  i796.cullingMask = i797[6]
  i796.intensity = i797[7]
  i796.range = i797[8]
  i796.spotAngle = i797[9]
  i796.shadows = i797[10]
  i796.shadowNormalBias = i797[11]
  i796.shadowBias = i797[12]
  i796.shadowStrength = i797[13]
  i796.shadowResolution = i797[14]
  i796.lightmapBakeType = i797[15]
  i796.renderMode = i797[16]
  request.r(i797[17], i797[18], 0, i796, 'cookie')
  i796.cookieSize = i797[19]
  return i796
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i799 = data
  i798.m_Version = i799[0]
  i798.m_UsePipelineSettings = !!i799[1]
  i798.m_AdditionalLightsShadowResolutionTier = i799[2]
  i798.m_LightLayerMask = i799[3]
  i798.m_RenderingLayers = i799[4]
  i798.m_CustomShadowLayers = !!i799[5]
  i798.m_ShadowLayerMask = i799[6]
  i798.m_ShadowRenderingLayers = i799[7]
  i798.m_LightCookieSize = new pc.Vec2( i799[8], i799[9] )
  i798.m_LightCookieOffset = new pc.Vec2( i799[10], i799[11] )
  i798.m_SoftShadowQuality = i799[12]
  return i798
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'm_FirstSelected')
  i800.m_sendNavigationEvents = !!i801[2]
  i800.m_DragThreshold = i801[3]
  return i800
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i803 = data
  i802.m_HorizontalAxis = i803[0]
  i802.m_VerticalAxis = i803[1]
  i802.m_SubmitButton = i803[2]
  i802.m_CancelButton = i803[3]
  i802.m_InputActionsPerSecond = i803[4]
  i802.m_RepeatDelay = i803[5]
  i802.m_ForceModuleActive = !!i803[6]
  i802.m_SendPointerHoverToParent = !!i803[7]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i805 = data
  i804.ambientIntensity = i805[0]
  i804.reflectionIntensity = i805[1]
  i804.ambientMode = i805[2]
  i804.ambientLight = new pc.Color(i805[3], i805[4], i805[5], i805[6])
  i804.ambientSkyColor = new pc.Color(i805[7], i805[8], i805[9], i805[10])
  i804.ambientGroundColor = new pc.Color(i805[11], i805[12], i805[13], i805[14])
  i804.ambientEquatorColor = new pc.Color(i805[15], i805[16], i805[17], i805[18])
  i804.fogColor = new pc.Color(i805[19], i805[20], i805[21], i805[22])
  i804.fogEndDistance = i805[23]
  i804.fogStartDistance = i805[24]
  i804.fogDensity = i805[25]
  i804.fog = !!i805[26]
  request.r(i805[27], i805[28], 0, i804, 'skybox')
  i804.fogMode = i805[29]
  var i807 = i805[30]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i807[i + 0]) );
  }
  i804.lightmaps = i806
  i804.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i805[31], i804.lightProbes)
  i804.lightmapsMode = i805[32]
  i804.mixedBakeMode = i805[33]
  i804.environmentLightingMode = i805[34]
  i804.ambientProbe = new pc.SphericalHarmonicsL2(i805[35])
  i804.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i805[36])
  i804.useReferenceAmbientProbe = !!i805[37]
  request.r(i805[38], i805[39], 0, i804, 'customReflection')
  request.r(i805[40], i805[41], 0, i804, 'defaultReflection')
  i804.defaultReflectionMode = i805[42]
  i804.defaultReflectionResolution = i805[43]
  i804.sunLightObjectId = i805[44]
  i804.pixelLightCount = i805[45]
  i804.defaultReflectionHDR = !!i805[46]
  i804.hasLightDataAsset = !!i805[47]
  i804.hasManualGenerate = !!i805[48]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'lightmapColor')
  request.r(i811[2], i811[3], 0, i810, 'lightmapDirection')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i812 = root || new UnityEngine.LightProbes()
  var i813 = data
  return i812
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'panelPrefab')
  var i823 = i821[2]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i823.length; i += 1) {
    i822.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i823[i + 0]));
  }
  i820.prefabs = i822
  return i820
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i827 = data
  i826.type = i827[0]
  request.r(i827[1], i827[2], 0, i826, 'prefab')
  return i826
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i829 = data
  i828.m_Spacing = i829[0]
  i828.m_ChildForceExpandWidth = !!i829[1]
  i828.m_ChildForceExpandHeight = !!i829[2]
  i828.m_ChildControlWidth = !!i829[3]
  i828.m_ChildControlHeight = !!i829[4]
  i828.m_ChildScaleWidth = !!i829[5]
  i828.m_ChildScaleHeight = !!i829[6]
  i828.m_ReverseArrangement = !!i829[7]
  i828.m_Padding = UnityEngine.RectOffset.FromPaddings(i829[8], i829[9], i829[10], i829[11])
  i828.m_ChildAlignment = i829[12]
  return i828
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i831 = data
  i830.m_HorizontalFit = i831[0]
  i830.m_VerticalFit = i831[1]
  return i830
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'contentHolder')
  return i832
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'nameLabel')
  request.r(i835[2], i835[3], 0, i834, 'scrollRect')
  request.r(i835[4], i835[5], 0, i834, 'viewport')
  request.r(i835[6], i835[7], 0, i834, 'Canvas')
  return i834
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i837 = data
  i836.m_IgnoreLayout = !!i837[0]
  i836.m_MinWidth = i837[1]
  i836.m_MinHeight = i837[2]
  i836.m_PreferredWidth = i837[3]
  i836.m_PreferredHeight = i837[4]
  i836.m_FlexibleWidth = i837[5]
  i836.m_FlexibleHeight = i837[6]
  i836.m_LayoutPriority = i837[7]
  return i836
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_ObjectArgument')
  i838.m_ObjectArgumentAssemblyTypeName = i839[2]
  i838.m_IntArgument = i839[3]
  i838.m_FloatArgument = i839[4]
  i838.m_StringArgument = i839[5]
  i838.m_BoolArgument = !!i839[6]
  return i838
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.Text' )
  var i841 = data
  i840.m_FontData = request.d('UnityEngine.UI.FontData', i841[0], i840.m_FontData)
  i840.m_Text = i841[1]
  request.r(i841[2], i841[3], 0, i840, 'm_Material')
  i840.m_Maskable = !!i841[4]
  i840.m_Color = new pc.Color(i841[5], i841[6], i841[7], i841[8])
  i840.m_RaycastTarget = !!i841[9]
  i840.m_RaycastPadding = new pc.Vec4( i841[10], i841[11], i841[12], i841[13] )
  return i840
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.FontData' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'm_Font')
  i842.m_FontSize = i843[2]
  i842.m_FontStyle = i843[3]
  i842.m_BestFit = !!i843[4]
  i842.m_MinSize = i843[5]
  i842.m_MaxSize = i843[6]
  i842.m_Alignment = i843[7]
  i842.m_AlignByGeometry = !!i843[8]
  i842.m_RichText = !!i843[9]
  i842.m_HorizontalOverflow = i843[10]
  i842.m_VerticalOverflow = i843[11]
  i842.m_LineSpacing = i843[12]
  return i842
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'm_Content')
  i844.m_Horizontal = !!i845[2]
  i844.m_Vertical = !!i845[3]
  i844.m_MovementType = i845[4]
  i844.m_Elasticity = i845[5]
  i844.m_Inertia = !!i845[6]
  i844.m_DecelerationRate = i845[7]
  i844.m_ScrollSensitivity = i845[8]
  request.r(i845[9], i845[10], 0, i844, 'm_Viewport')
  request.r(i845[11], i845[12], 0, i844, 'm_HorizontalScrollbar')
  request.r(i845[13], i845[14], 0, i844, 'm_VerticalScrollbar')
  i844.m_HorizontalScrollbarVisibility = i845[15]
  i844.m_VerticalScrollbarVisibility = i845[16]
  i844.m_HorizontalScrollbarSpacing = i845[17]
  i844.m_VerticalScrollbarSpacing = i845[18]
  i844.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i845[19], i844.m_OnValueChanged)
  return i844
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i847 = data
  i846.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i847[0], i846.m_PersistentCalls)
  return i846
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.Mask' )
  var i849 = data
  i848.m_ShowMaskGraphic = !!i849[0]
  return i848
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'm_HandleRect')
  i850.m_Direction = i851[2]
  i850.m_Value = i851[3]
  i850.m_Size = i851[4]
  i850.m_NumberOfSteps = i851[5]
  i850.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i851[6], i850.m_OnValueChanged)
  i850.m_Navigation = request.d('UnityEngine.UI.Navigation', i851[7], i850.m_Navigation)
  i850.m_Transition = i851[8]
  i850.m_Colors = request.d('UnityEngine.UI.ColorBlock', i851[9], i850.m_Colors)
  i850.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i851[10], i850.m_SpriteState)
  i850.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i851[11], i850.m_AnimationTriggers)
  i850.m_Interactable = !!i851[12]
  request.r(i851[13], i851[14], 0, i850, 'm_TargetGraphic')
  return i850
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i853 = data
  i852.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i853[0], i852.m_PersistentCalls)
  return i852
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i855 = data
  var i857 = i855[0]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i857[i + 0]));
  }
  i854.m_Delegates = i856
  return i854
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i861 = data
  i860.eventID = i861[0]
  i860.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i861[1], i860.callback)
  return i860
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i863 = data
  i862.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i863[0], i862.m_PersistentCalls)
  return i862
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'nameLabel')
  request.r(i865[2], i865[3], 0, i864, 'valueLabel')
  i864.colorDefault = new pc.Color(i865[4], i865[5], i865[6], i865[7])
  i864.colorSelected = new pc.Color(i865[8], i865[9], i865[10], i865[11])
  return i864
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'nameLabel')
  request.r(i867[2], i867[3], 0, i866, 'valueToggle')
  request.r(i867[4], i867[5], 0, i866, 'checkmarkImage')
  i866.colorDefault = new pc.Color(i867[6], i867[7], i867[8], i867[9])
  i866.colorSelected = new pc.Color(i867[10], i867[11], i867[12], i867[13])
  return i866
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i869 = data
  i868.toggleTransition = i869[0]
  request.r(i869[1], i869[2], 0, i868, 'graphic')
  i868.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i869[3], i868.onValueChanged)
  request.r(i869[4], i869[5], 0, i868, 'm_Group')
  i868.m_IsOn = !!i869[6]
  i868.m_Navigation = request.d('UnityEngine.UI.Navigation', i869[7], i868.m_Navigation)
  i868.m_Transition = i869[8]
  i868.m_Colors = request.d('UnityEngine.UI.ColorBlock', i869[9], i868.m_Colors)
  i868.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i869[10], i868.m_SpriteState)
  i868.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i869[11], i868.m_AnimationTriggers)
  i868.m_Interactable = !!i869[12]
  request.r(i869[13], i869[14], 0, i868, 'm_TargetGraphic')
  return i868
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i871 = data
  i870.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i871[0], i870.m_PersistentCalls)
  return i870
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'nameLabel')
  request.r(i873[2], i873[3], 0, i872, 'valueLabel')
  i872.colorDefault = new pc.Color(i873[4], i873[5], i873[6], i873[7])
  i872.colorSelected = new pc.Color(i873[8], i873[9], i873[10], i873[11])
  return i872
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'nameLabel')
  request.r(i875[2], i875[3], 0, i874, 'valueLabel')
  i874.colorDefault = new pc.Color(i875[4], i875[5], i875[6], i875[7])
  i874.colorSelected = new pc.Color(i875[8], i875[9], i875[10], i875[11])
  return i874
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'nameLabel')
  request.r(i877[2], i877[3], 0, i876, 'valueLabel')
  i876.colorDefault = new pc.Color(i877[4], i877[5], i877[6], i877[7])
  i876.colorSelected = new pc.Color(i877[8], i877[9], i877[10], i877[11])
  return i876
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'nextButtonText')
  request.r(i879[2], i879[3], 0, i878, 'previousButtonText')
  request.r(i879[4], i879[5], 0, i878, 'nameLabel')
  request.r(i879[6], i879[7], 0, i878, 'valueLabel')
  i878.colorDefault = new pc.Color(i879[8], i879[9], i879[10], i879[11])
  i878.colorSelected = new pc.Color(i879[12], i879[13], i879[14], i879[15])
  return i878
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'nameLabel')
  i880.colorDefault = new pc.Color(i881[2], i881[3], i881[4], i881[5])
  i880.colorSelected = new pc.Color(i881[6], i881[7], i881[8], i881[9])
  return i880
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'nameLabel')
  request.r(i883[2], i883[3], 0, i882, 'valueToggle')
  i882.colorDefault = new pc.Color(i883[4], i883[5], i883[6], i883[7])
  i882.colorSelected = new pc.Color(i883[8], i883[9], i883[10], i883[11])
  return i882
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i885 = data
  i884.toggleTransition = i885[0]
  request.r(i885[1], i885[2], 0, i884, 'graphic')
  i884.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i885[3], i884.onValueChanged)
  request.r(i885[4], i885[5], 0, i884, 'content')
  request.r(i885[6], i885[7], 0, i884, 'arrowOpened')
  request.r(i885[8], i885[9], 0, i884, 'arrowClosed')
  request.r(i885[10], i885[11], 0, i884, 'm_Group')
  i884.m_IsOn = !!i885[12]
  i884.m_Navigation = request.d('UnityEngine.UI.Navigation', i885[13], i884.m_Navigation)
  i884.m_Transition = i885[14]
  i884.m_Colors = request.d('UnityEngine.UI.ColorBlock', i885[15], i884.m_Colors)
  i884.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i885[16], i884.m_SpriteState)
  i884.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i885[17], i884.m_AnimationTriggers)
  i884.m_Interactable = !!i885[18]
  request.r(i885[19], i885[20], 0, i884, 'm_TargetGraphic')
  return i884
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'nameLabel')
  request.r(i887[2], i887[3], 0, i886, 'valueToggle')
  request.r(i887[4], i887[5], 0, i886, 'colorImage')
  request.r(i887[6], i887[7], 0, i886, 'fieldR')
  request.r(i887[8], i887[9], 0, i886, 'fieldG')
  request.r(i887[10], i887[11], 0, i886, 'fieldB')
  request.r(i887[12], i887[13], 0, i886, 'fieldA')
  i886.colorDefault = new pc.Color(i887[14], i887[15], i887[16], i887[17])
  i886.colorSelected = new pc.Color(i887[18], i887[19], i887[20], i887[21])
  return i886
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'nameLabel')
  request.r(i889[2], i889[3], 0, i888, 'valueLabel')
  i888.colorDefault = new pc.Color(i889[4], i889[5], i889[6], i889[7])
  i888.colorSelected = new pc.Color(i889[8], i889[9], i889[10], i889[11])
  return i888
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'nameLabel')
  request.r(i891[2], i891[3], 0, i890, 'valueToggle')
  request.r(i891[4], i891[5], 0, i890, 'fieldX')
  request.r(i891[6], i891[7], 0, i890, 'fieldY')
  i890.colorDefault = new pc.Color(i891[8], i891[9], i891[10], i891[11])
  i890.colorSelected = new pc.Color(i891[12], i891[13], i891[14], i891[15])
  return i890
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'nameLabel')
  request.r(i893[2], i893[3], 0, i892, 'valueToggle')
  request.r(i893[4], i893[5], 0, i892, 'fieldX')
  request.r(i893[6], i893[7], 0, i892, 'fieldY')
  request.r(i893[8], i893[9], 0, i892, 'fieldZ')
  i892.colorDefault = new pc.Color(i893[10], i893[11], i893[12], i893[13])
  i892.colorSelected = new pc.Color(i893[14], i893[15], i893[16], i893[17])
  return i892
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'nameLabel')
  request.r(i895[2], i895[3], 0, i894, 'valueToggle')
  request.r(i895[4], i895[5], 0, i894, 'fieldX')
  request.r(i895[6], i895[7], 0, i894, 'fieldY')
  request.r(i895[8], i895[9], 0, i894, 'fieldZ')
  request.r(i895[10], i895[11], 0, i894, 'fieldW')
  i894.colorDefault = new pc.Color(i895[12], i895[13], i895[14], i895[15])
  i894.colorSelected = new pc.Color(i895[16], i895[17], i895[18], i895[19])
  return i894
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i897 = data
  i896.colorDefault = new pc.Color(i897[0], i897[1], i897[2], i897[3])
  i896.colorSelected = new pc.Color(i897[4], i897[5], i897[6], i897[7])
  return i896
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i899 = data
  i898.m_Spacing = i899[0]
  i898.m_ChildForceExpandWidth = !!i899[1]
  i898.m_ChildForceExpandHeight = !!i899[2]
  i898.m_ChildControlWidth = !!i899[3]
  i898.m_ChildControlHeight = !!i899[4]
  i898.m_ChildScaleWidth = !!i899[5]
  i898.m_ChildScaleHeight = !!i899[6]
  i898.m_ReverseArrangement = !!i899[7]
  i898.m_Padding = UnityEngine.RectOffset.FromPaddings(i899[8], i899[9], i899[10], i899[11])
  i898.m_ChildAlignment = i899[12]
  return i898
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i901 = data
  i900.colorDefault = new pc.Color(i901[0], i901[1], i901[2], i901[3])
  i900.colorSelected = new pc.Color(i901[4], i901[5], i901[6], i901[7])
  return i900
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'nameLabel')
  request.r(i903[2], i903[3], 0, i902, 'header')
  i902.colorDefault = new pc.Color(i903[4], i903[5], i903[6], i903[7])
  i902.colorSelected = new pc.Color(i903[8], i903[9], i903[10], i903[11])
  return i902
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'nameLabel')
  request.r(i905[2], i905[3], 0, i904, 'valueToggle')
  var i907 = i905[4]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 1, i906, '')
  }
  i904.toggles = i906
  i904.colorDefault = new pc.Color(i905[5], i905[6], i905[7], i905[8])
  i904.colorSelected = new pc.Color(i905[9], i905[10], i905[11], i905[12])
  return i904
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'nameLabel')
  request.r(i911[2], i911[3], 0, i910, 'valueToggle')
  request.r(i911[4], i911[5], 0, i910, 'checkmarkImage')
  i910.colorDefault = new pc.Color(i911[6], i911[7], i911[8], i911[9])
  i910.colorSelected = new pc.Color(i911[10], i911[11], i911[12], i911[13])
  return i910
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'nameLabel')
  request.r(i913[2], i913[3], 0, i912, 'valueToggle')
  request.r(i913[4], i913[5], 0, i912, 'checkmarkImage')
  i912.colorDefault = new pc.Color(i913[6], i913[7], i913[8], i913[9])
  i912.colorSelected = new pc.Color(i913[10], i913[11], i913[12], i913[13])
  return i912
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'nextButtonText')
  request.r(i915[2], i915[3], 0, i914, 'previousButtonText')
  request.r(i915[4], i915[5], 0, i914, 'nameLabel')
  request.r(i915[6], i915[7], 0, i914, 'valueLabel')
  i914.colorDefault = new pc.Color(i915[8], i915[9], i915[10], i915[11])
  i914.colorSelected = new pc.Color(i915[12], i915[13], i915[14], i915[15])
  return i914
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'nameLabel')
  request.r(i917[2], i917[3], 0, i916, 'valueToggle')
  i916.colorDefault = new pc.Color(i917[4], i917[5], i917[6], i917[7])
  i916.colorSelected = new pc.Color(i917[8], i917[9], i917[10], i917[11])
  return i916
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'nameLabel')
  i918.colorDefault = new pc.Color(i919[2], i919[3], i919[4], i919[5])
  i918.colorSelected = new pc.Color(i919[6], i919[7], i919[8], i919[9])
  return i918
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'nameLabel')
  request.r(i921[2], i921[3], 0, i920, 'valueLabel')
  request.r(i921[4], i921[5], 0, i920, 'progressBarRect')
  i920.colorDefault = new pc.Color(i921[6], i921[7], i921[8], i921[9])
  i920.colorSelected = new pc.Color(i921[10], i921[11], i921[12], i921[13])
  return i920
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'nameLabel')
  request.r(i923[2], i923[3], 0, i922, 'valueLabel')
  i922.colorDefault = new pc.Color(i923[4], i923[5], i923[6], i923[7])
  i922.colorSelected = new pc.Color(i923[8], i923[9], i923[10], i923[11])
  return i922
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'nameLabel')
  request.r(i925[2], i925[3], 0, i924, 'valueLabel')
  i924.colorDefault = new pc.Color(i925[4], i925[5], i925[6], i925[7])
  i924.colorSelected = new pc.Color(i925[8], i925[9], i925[10], i925[11])
  return i924
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'nextButtonText')
  request.r(i927[2], i927[3], 0, i926, 'previousButtonText')
  request.r(i927[4], i927[5], 0, i926, 'nameLabel')
  request.r(i927[6], i927[7], 0, i926, 'valueLabel')
  i926.colorDefault = new pc.Color(i927[8], i927[9], i927[10], i927[11])
  i926.colorSelected = new pc.Color(i927[12], i927[13], i927[14], i927[15])
  return i926
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'nextButtonText')
  request.r(i929[2], i929[3], 0, i928, 'previousButtonText')
  request.r(i929[4], i929[5], 0, i928, 'nameLabel')
  request.r(i929[6], i929[7], 0, i928, 'valueLabel')
  i928.colorDefault = new pc.Color(i929[8], i929[9], i929[10], i929[11])
  i928.colorSelected = new pc.Color(i929[12], i929[13], i929[14], i929[15])
  return i928
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'panel')
  request.r(i931[2], i931[3], 0, i930, 'valuePrefab')
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i933 = data
  i932.AdditionalLightsPerObjectLimit = i933[0]
  i932.AdditionalLightsRenderingMode = i933[1]
  i932.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i933[2], i932.LightRenderingMode)
  i932.ColorGradingLutSize = i933[3]
  i932.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i933[4], i932.ColorGradingMode)
  i932.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i933[5], i932.MainLightRenderingMode)
  i932.MainLightRenderingModeValue = i933[6]
  i932.SupportsMainLightShadows = !!i933[7]
  i932.MixedLightingSupported = !!i933[8]
  i932.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i933[9], i932.MsaaQuality)
  i932.MSAA = i933[10]
  i932.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i933[11], i932.OpaqueDownsampling)
  i932.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i933[12], i932.MainLightShadowmapResolution)
  i932.MainLightShadowmapResolutionValue = i933[13]
  i932.SupportsSoftShadows = !!i933[14]
  i932.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i933[15], i932.SoftShadowQuality)
  i932.SoftShadowQualityValue = i933[16]
  i932.ShadowDistance = i933[17]
  i932.ShadowCascadeCount = i933[18]
  i932.Cascade2Split = i933[19]
  i932.Cascade3Split = new pc.Vec2( i933[20], i933[21] )
  i932.Cascade4Split = new pc.Vec3( i933[22], i933[23], i933[24] )
  i932.CascadeBorder = i933[25]
  i932.ShadowDepthBias = i933[26]
  i932.ShadowNormalBias = i933[27]
  i932.RenderScale = i933[28]
  i932.RequireDepthTexture = !!i933[29]
  i932.RequireOpaqueTexture = !!i933[30]
  i932.SupportsHDR = !!i933[31]
  i932.SupportsTerrainHoles = !!i933[32]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i935 = data
  i934.Disabled = i935[0]
  i934.PerVertex = i935[1]
  i934.PerPixel = i935[2]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i937 = data
  i936.LowDynamicRange = i937[0]
  i936.HighDynamicRange = i937[1]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i939 = data
  i938.Disabled = i939[0]
  i938._2x = i939[1]
  i938._4x = i939[2]
  i938._8x = i939[3]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i941 = data
  i940.None = i941[0]
  i940._2xBilinear = i941[1]
  i940._4xBox = i941[2]
  i940._4xBilinear = i941[3]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i943 = data
  i942._256 = i943[0]
  i942._512 = i943[1]
  i942._1024 = i943[2]
  i942._2048 = i943[3]
  i942._4096 = i943[4]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i945 = data
  i944.UsePipelineSettings = i945[0]
  i944.Low = i945[1]
  i944.Medium = i945[2]
  i944.High = i945[3]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i947 = data
  var i949 = i947[0]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i949[i + 0]));
  }
  i946.ShaderCompilationErrors = i948
  i946.name = i947[1]
  i946.guid = i947[2]
  var i951 = i947[3]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i946.shaderDefinedKeywords = i950
  var i953 = i947[4]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i953[i + 0]) );
  }
  i946.passes = i952
  var i955 = i947[5]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i955[i + 0]) );
  }
  i946.usePasses = i954
  var i957 = i947[6]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i957[i + 0]) );
  }
  i946.defaultParameterValues = i956
  request.r(i947[7], i947[8], 0, i946, 'unityFallbackShader')
  i946.readDepth = !!i947[9]
  i946.isCreatedByShaderGraph = !!i947[10]
  i946.compiled = !!i947[11]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i961 = data
  i960.shaderName = i961[0]
  i960.errorMessage = i961[1]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i966 = root || new pc.UnityShaderPass()
  var i967 = data
  i966.id = i967[0]
  i966.subShaderIndex = i967[1]
  i966.name = i967[2]
  i966.passType = i967[3]
  i966.grabPassTextureName = i967[4]
  i966.usePass = !!i967[5]
  i966.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[6], i966.zTest)
  i966.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[7], i966.zWrite)
  i966.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[8], i966.culling)
  i966.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i967[9], i966.blending)
  i966.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i967[10], i966.alphaBlending)
  i966.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[11], i966.colorWriteMask)
  i966.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[12], i966.offsetUnits)
  i966.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[13], i966.offsetFactor)
  i966.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[14], i966.stencilRef)
  i966.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[15], i966.stencilReadMask)
  i966.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[16], i966.stencilWriteMask)
  i966.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i967[17], i966.stencilOp)
  i966.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i967[18], i966.stencilOpFront)
  i966.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i967[19], i966.stencilOpBack)
  var i969 = i967[20]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i969[i + 0]) );
  }
  i966.tags = i968
  var i971 = i967[21]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( i971[i + 0] );
  }
  i966.passDefinedKeywords = i970
  var i973 = i967[22]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i973[i + 0]) );
  }
  i966.passDefinedKeywordGroups = i972
  var i975 = i967[23]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i975[i + 0]) );
  }
  i966.variants = i974
  var i977 = i967[24]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i977[i + 0]) );
  }
  i966.excludedVariants = i976
  i966.hasDepthReader = !!i967[25]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i979 = data
  i978.val = i979[0]
  i978.name = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i981 = data
  i980.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[0], i980.src)
  i980.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[1], i980.dst)
  i980.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[2], i980.op)
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i983 = data
  i982.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[0], i982.pass)
  i982.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[1], i982.fail)
  i982.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[2], i982.zFail)
  i982.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[3], i982.comp)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i987 = data
  i986.name = i987[0]
  i986.value = i987[1]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i991 = data
  var i993 = i991[0]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i990.keywords = i992
  i990.hasDiscard = !!i991[1]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i997 = data
  i996.passId = i997[0]
  i996.subShaderIndex = i997[1]
  var i999 = i997[2]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( i999[i + 0] );
  }
  i996.keywords = i998
  i996.vertexProgram = i997[3]
  i996.fragmentProgram = i997[4]
  i996.exportedForWebGl2 = !!i997[5]
  i996.readDepth = !!i997[6]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'shader')
  i1002.pass = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.type = i1007[1]
  i1006.value = new pc.Vec4( i1007[2], i1007[3], i1007[4], i1007[5] )
  i1006.textureValue = i1007[6]
  i1006.shaderPropertyFlag = i1007[7]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1009 = data
  i1008.name = i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'texture')
  i1008.aabb = i1009[3]
  i1008.vertices = i1009[4]
  i1008.triangles = i1009[5]
  i1008.textureRect = UnityEngine.Rect.MinMaxRect(i1009[6], i1009[7], i1009[8], i1009[9])
  i1008.packedRect = UnityEngine.Rect.MinMaxRect(i1009[10], i1009[11], i1009[12], i1009[13])
  i1008.border = new pc.Vec4( i1009[14], i1009[15], i1009[16], i1009[17] )
  i1008.transparency = i1009[18]
  i1008.bounds = i1009[19]
  i1008.pixelsPerUnit = i1009[20]
  i1008.textureWidth = i1009[21]
  i1008.textureHeight = i1009[22]
  i1008.nativeSize = new pc.Vec2( i1009[23], i1009[24] )
  i1008.pivot = new pc.Vec2( i1009[25], i1009[26] )
  i1008.textureRectOffset = new pc.Vec2( i1009[27], i1009[28] )
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.ascent = i1011[1]
  i1010.originalLineHeight = i1011[2]
  i1010.fontSize = i1011[3]
  var i1013 = i1011[4]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1013[i + 0]) );
  }
  i1010.characterInfo = i1012
  request.r(i1011[5], i1011[6], 0, i1010, 'texture')
  i1010.originalFontSize = i1011[7]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1017 = data
  i1016.index = i1017[0]
  i1016.advance = i1017[1]
  i1016.bearing = i1017[2]
  i1016.glyphWidth = i1017[3]
  i1016.glyphHeight = i1017[4]
  i1016.minX = i1017[5]
  i1016.maxX = i1017[6]
  i1016.minY = i1017[7]
  i1016.maxY = i1017[8]
  i1016.uvBottomLeftX = i1017[9]
  i1016.uvBottomLeftY = i1017[10]
  i1016.uvBottomRightX = i1017[11]
  i1016.uvBottomRightY = i1017[12]
  i1016.uvTopLeftX = i1017[13]
  i1016.uvTopLeftY = i1017[14]
  i1016.uvTopRightX = i1017[15]
  i1016.uvTopRightY = i1017[16]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.bytes64 = i1019[1]
  i1018.data = i1019[2]
  return i1018
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1021 = data
  i1020.hashCode = i1021[0]
  request.r(i1021[1], i1021[2], 0, i1020, 'material')
  i1020.materialHashCode = i1021[3]
  request.r(i1021[4], i1021[5], 0, i1020, 'atlas')
  i1020.normalStyle = i1021[6]
  i1020.normalSpacingOffset = i1021[7]
  i1020.boldStyle = i1021[8]
  i1020.boldSpacing = i1021[9]
  i1020.italicStyle = i1021[10]
  i1020.tabSize = i1021[11]
  i1020.m_Version = i1021[12]
  i1020.m_SourceFontFileGUID = i1021[13]
  request.r(i1021[14], i1021[15], 0, i1020, 'm_SourceFontFile_EditorRef')
  request.r(i1021[16], i1021[17], 0, i1020, 'm_SourceFontFile')
  i1020.m_AtlasPopulationMode = i1021[18]
  i1020.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1021[19], i1020.m_FaceInfo)
  var i1023 = i1021[20]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.add(request.d('UnityEngine.TextCore.Glyph', i1023[i + 0]));
  }
  i1020.m_GlyphTable = i1022
  var i1025 = i1021[21]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('TMPro.TMP_Character', i1025[i + 0]));
  }
  i1020.m_CharacterTable = i1024
  var i1027 = i1021[22]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 2, i1026, '')
  }
  i1020.m_AtlasTextures = i1026
  i1020.m_AtlasTextureIndex = i1021[23]
  i1020.m_IsMultiAtlasTexturesEnabled = !!i1021[24]
  i1020.m_ClearDynamicDataOnBuild = !!i1021[25]
  var i1029 = i1021[26]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('UnityEngine.TextCore.GlyphRect', i1029[i + 0]));
  }
  i1020.m_UsedGlyphRects = i1028
  var i1031 = i1021[27]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(request.d('UnityEngine.TextCore.GlyphRect', i1031[i + 0]));
  }
  i1020.m_FreeGlyphRects = i1030
  i1020.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1021[28], i1020.m_fontInfo)
  i1020.m_AtlasWidth = i1021[29]
  i1020.m_AtlasHeight = i1021[30]
  i1020.m_AtlasPadding = i1021[31]
  i1020.m_AtlasRenderMode = i1021[32]
  var i1033 = i1021[33]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('TMPro.TMP_Glyph', i1033[i + 0]));
  }
  i1020.m_glyphInfoList = i1032
  i1020.m_KerningTable = request.d('TMPro.KerningTable', i1021[34], i1020.m_KerningTable)
  i1020.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1021[35], i1020.m_FontFeatureTable)
  var i1035 = i1021[36]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 1, i1034, '')
  }
  i1020.fallbackFontAssets = i1034
  var i1037 = i1021[37]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 1, i1036, '')
  }
  i1020.m_FallbackFontAssetTable = i1036
  i1020.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1021[38], i1020.m_CreationSettings)
  var i1039 = i1021[39]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('TMPro.TMP_FontWeightPair', i1039[i + 0]) );
  }
  i1020.m_FontWeightTable = i1038
  var i1041 = i1021[40]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('TMPro.TMP_FontWeightPair', i1041[i + 0]) );
  }
  i1020.fontWeights = i1040
  return i1020
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1043 = data
  i1042.m_FaceIndex = i1043[0]
  i1042.m_FamilyName = i1043[1]
  i1042.m_StyleName = i1043[2]
  i1042.m_PointSize = i1043[3]
  i1042.m_Scale = i1043[4]
  i1042.m_UnitsPerEM = i1043[5]
  i1042.m_LineHeight = i1043[6]
  i1042.m_AscentLine = i1043[7]
  i1042.m_CapLine = i1043[8]
  i1042.m_MeanLine = i1043[9]
  i1042.m_Baseline = i1043[10]
  i1042.m_DescentLine = i1043[11]
  i1042.m_SuperscriptOffset = i1043[12]
  i1042.m_SuperscriptSize = i1043[13]
  i1042.m_SubscriptOffset = i1043[14]
  i1042.m_SubscriptSize = i1043[15]
  i1042.m_UnderlineOffset = i1043[16]
  i1042.m_UnderlineThickness = i1043[17]
  i1042.m_StrikethroughOffset = i1043[18]
  i1042.m_StrikethroughThickness = i1043[19]
  i1042.m_TabWidth = i1043[20]
  return i1042
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1047 = data
  i1046.m_Index = i1047[0]
  i1046.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1047[1], i1046.m_Metrics)
  i1046.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1047[2], i1046.m_GlyphRect)
  i1046.m_Scale = i1047[3]
  i1046.m_AtlasIndex = i1047[4]
  i1046.m_ClassDefinitionType = i1047[5]
  return i1046
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1049 = data
  i1048.m_Width = i1049[0]
  i1048.m_Height = i1049[1]
  i1048.m_HorizontalBearingX = i1049[2]
  i1048.m_HorizontalBearingY = i1049[3]
  i1048.m_HorizontalAdvance = i1049[4]
  return i1048
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1051 = data
  i1050.m_X = i1051[0]
  i1050.m_Y = i1051[1]
  i1050.m_Width = i1051[2]
  i1050.m_Height = i1051[3]
  return i1050
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.TMP_Character' )
  var i1055 = data
  i1054.m_ElementType = i1055[0]
  i1054.m_Unicode = i1055[1]
  i1054.m_GlyphIndex = i1055[2]
  i1054.m_Scale = i1055[3]
  return i1054
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1060 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1061 = data
  i1060.Name = i1061[0]
  i1060.PointSize = i1061[1]
  i1060.Scale = i1061[2]
  i1060.CharacterCount = i1061[3]
  i1060.LineHeight = i1061[4]
  i1060.Baseline = i1061[5]
  i1060.Ascender = i1061[6]
  i1060.CapHeight = i1061[7]
  i1060.Descender = i1061[8]
  i1060.CenterLine = i1061[9]
  i1060.SuperscriptOffset = i1061[10]
  i1060.SubscriptOffset = i1061[11]
  i1060.SubSize = i1061[12]
  i1060.Underline = i1061[13]
  i1060.UnderlineThickness = i1061[14]
  i1060.strikethrough = i1061[15]
  i1060.strikethroughThickness = i1061[16]
  i1060.TabWidth = i1061[17]
  i1060.Padding = i1061[18]
  i1060.AtlasWidth = i1061[19]
  i1060.AtlasHeight = i1061[20]
  return i1060
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1065 = data
  i1064.id = i1065[0]
  i1064.x = i1065[1]
  i1064.y = i1065[2]
  i1064.width = i1065[3]
  i1064.height = i1065[4]
  i1064.xOffset = i1065[5]
  i1064.yOffset = i1065[6]
  i1064.xAdvance = i1065[7]
  i1064.scale = i1065[8]
  return i1064
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.KerningTable' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('TMPro.KerningPair', i1069[i + 0]));
  }
  i1066.kerningPairs = i1068
  return i1066
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1072 = root || request.c( 'TMPro.KerningPair' )
  var i1073 = data
  i1072.xOffset = i1073[0]
  i1072.m_FirstGlyph = i1073[1]
  i1072.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1073[2], i1072.m_FirstGlyphAdjustments)
  i1072.m_SecondGlyph = i1073[3]
  i1072.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1073[4], i1072.m_SecondGlyphAdjustments)
  i1072.m_IgnoreSpacingAdjustments = !!i1073[5]
  return i1072
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1074 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1075 = data
  var i1077 = i1075[0]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1077[i + 0]));
  }
  i1074.m_GlyphPairAdjustmentRecords = i1076
  return i1074
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1080 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1081 = data
  i1080.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1081[0], i1080.m_FirstAdjustmentRecord)
  i1080.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1081[1], i1080.m_SecondAdjustmentRecord)
  i1080.m_FeatureLookupFlags = i1081[2]
  return i1080
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1083 = data
  i1082.m_GlyphIndex = i1083[0]
  i1082.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1083[1], i1082.m_GlyphValueRecord)
  return i1082
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1084 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1085 = data
  i1084.m_XPlacement = i1085[0]
  i1084.m_YPlacement = i1085[1]
  i1084.m_XAdvance = i1085[2]
  i1084.m_YAdvance = i1085[3]
  return i1084
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1089 = data
  i1088.sourceFontFileName = i1089[0]
  i1088.sourceFontFileGUID = i1089[1]
  i1088.pointSizeSamplingMode = i1089[2]
  i1088.pointSize = i1089[3]
  i1088.padding = i1089[4]
  i1088.packingMode = i1089[5]
  i1088.atlasWidth = i1089[6]
  i1088.atlasHeight = i1089[7]
  i1088.characterSetSelectionMode = i1089[8]
  i1088.characterSequence = i1089[9]
  i1088.referencedFontAssetGUID = i1089[10]
  i1088.referencedTextAssetGUID = i1089[11]
  i1088.fontStyle = i1089[12]
  i1088.fontStyleModifier = i1089[13]
  i1088.renderMode = i1089[14]
  i1088.includeFontFeatures = !!i1089[15]
  return i1088
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1092 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'regularTypeface')
  request.r(i1093[2], i1093[3], 0, i1092, 'italicTypeface')
  return i1092
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 1, i1096, '')
  }
  i1094.components = i1096
  return i1094
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1101 = data
  i1100.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1101[0], i1100.mode)
  i1100.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1101[1], i1100.neutralHDRRangeReductionMode)
  i1100.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1101[2], i1100.acesPreset)
  i1100.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1101[3], i1100.hueShiftAmount)
  i1100.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1101[4], i1100.detectPaperWhite)
  i1100.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1101[5], i1100.paperWhite)
  i1100.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1101[6], i1100.detectBrightnessLimits)
  i1100.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1101[7], i1100.minNits)
  i1100.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1101[8], i1100.maxNits)
  i1100.active = !!i1101[9]
  return i1100
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1103 = data
  i1102.m_Value = i1103[0]
  i1102.m_OverrideState = !!i1103[1]
  return i1102
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1105 = data
  i1104.m_Value = i1105[0]
  i1104.m_OverrideState = !!i1105[1]
  return i1104
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1107 = data
  i1106.m_Value = i1107[0]
  i1106.m_OverrideState = !!i1107[1]
  return i1106
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1109 = data
  i1108.m_Value = i1109[0]
  i1108.m_OverrideState = !!i1109[1]
  return i1108
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1111 = data
  i1110.m_Value = !!i1111[0]
  i1110.m_OverrideState = !!i1111[1]
  return i1110
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1113 = data
  i1112.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1113[0], i1112.skipIterations)
  i1112.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1113[1], i1112.threshold)
  i1112.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1113[2], i1112.intensity)
  i1112.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1113[3], i1112.scatter)
  i1112.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1113[4], i1112.clamp)
  i1112.tint = request.d('UnityEngine.Rendering.ColorParameter', i1113[5], i1112.tint)
  i1112.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1113[6], i1112.highQualityFiltering)
  i1112.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1113[7], i1112.downscale)
  i1112.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1113[8], i1112.maxIterations)
  i1112.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1113[9], i1112.dirtTexture)
  i1112.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1113[10], i1112.dirtIntensity)
  i1112.active = !!i1113[11]
  return i1112
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1115 = data
  i1114.m_Value = i1115[0]
  i1114.m_OverrideState = !!i1115[1]
  return i1114
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1117 = data
  i1116.m_Value = i1117[0]
  i1116.m_OverrideState = !!i1117[1]
  return i1116
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1119 = data
  i1118.m_Value = new pc.Color(i1119[0], i1119[1], i1119[2], i1119[3])
  i1118.m_OverrideState = !!i1119[4]
  return i1118
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1121 = data
  i1120.m_Value = i1121[0]
  i1120.m_OverrideState = !!i1121[1]
  return i1120
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1123 = data
  i1122.dimension = i1123[0]
  request.r(i1123[1], i1123[2], 0, i1122, 'm_Value')
  i1122.m_OverrideState = !!i1123[3]
  return i1122
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1125 = data
  i1124.color = request.d('UnityEngine.Rendering.ColorParameter', i1125[0], i1124.color)
  i1124.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1125[1], i1124.center)
  i1124.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1125[2], i1124.intensity)
  i1124.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1125[3], i1124.smoothness)
  i1124.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1125[4], i1124.rounded)
  i1124.active = !!i1125[5]
  return i1124
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1127 = data
  i1126.m_Value = new pc.Vec2( i1127[0], i1127[1] )
  i1126.m_OverrideState = !!i1127[2]
  return i1126
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1128 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1129 = data
  i1128.useSafeMode = !!i1129[0]
  i1128.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1129[1], i1128.safeModeOptions)
  i1128.timeScale = i1129[2]
  i1128.unscaledTimeScale = i1129[3]
  i1128.useSmoothDeltaTime = !!i1129[4]
  i1128.maxSmoothUnscaledTime = i1129[5]
  i1128.rewindCallbackMode = i1129[6]
  i1128.showUnityEditorReport = !!i1129[7]
  i1128.logBehaviour = i1129[8]
  i1128.drawGizmos = !!i1129[9]
  i1128.defaultRecyclable = !!i1129[10]
  i1128.defaultAutoPlay = i1129[11]
  i1128.defaultUpdateType = i1129[12]
  i1128.defaultTimeScaleIndependent = !!i1129[13]
  i1128.defaultEaseType = i1129[14]
  i1128.defaultEaseOvershootOrAmplitude = i1129[15]
  i1128.defaultEasePeriod = i1129[16]
  i1128.defaultAutoKill = !!i1129[17]
  i1128.defaultLoopType = i1129[18]
  i1128.debugMode = !!i1129[19]
  i1128.debugStoreTargetId = !!i1129[20]
  i1128.showPreviewPanel = !!i1129[21]
  i1128.storeSettingsLocation = i1129[22]
  i1128.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1129[23], i1128.modules)
  i1128.createASMDEF = !!i1129[24]
  i1128.showPlayingTweens = !!i1129[25]
  i1128.showPausedTweens = !!i1129[26]
  return i1128
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1130 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1131 = data
  i1130.logBehaviour = i1131[0]
  i1130.nestedTweenFailureBehaviour = i1131[1]
  return i1130
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1132 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1133 = data
  i1132.showPanel = !!i1133[0]
  i1132.audioEnabled = !!i1133[1]
  i1132.physicsEnabled = !!i1133[2]
  i1132.physics2DEnabled = !!i1133[3]
  i1132.spriteEnabled = !!i1133[4]
  i1132.uiEnabled = !!i1133[5]
  i1132.textMeshProEnabled = !!i1133[6]
  i1132.tk2DEnabled = !!i1133[7]
  i1132.deAudioEnabled = !!i1133[8]
  i1132.deUnityExtendedEnabled = !!i1133[9]
  i1132.epoOutlineEnabled = !!i1133[10]
  return i1132
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.TMP_Settings' )
  var i1135 = data
  i1134.m_enableWordWrapping = !!i1135[0]
  i1134.m_enableKerning = !!i1135[1]
  i1134.m_enableExtraPadding = !!i1135[2]
  i1134.m_enableTintAllSprites = !!i1135[3]
  i1134.m_enableParseEscapeCharacters = !!i1135[4]
  i1134.m_EnableRaycastTarget = !!i1135[5]
  i1134.m_GetFontFeaturesAtRuntime = !!i1135[6]
  i1134.m_missingGlyphCharacter = i1135[7]
  i1134.m_warningsDisabled = !!i1135[8]
  request.r(i1135[9], i1135[10], 0, i1134, 'm_defaultFontAsset')
  i1134.m_defaultFontAssetPath = i1135[11]
  i1134.m_defaultFontSize = i1135[12]
  i1134.m_defaultAutoSizeMinRatio = i1135[13]
  i1134.m_defaultAutoSizeMaxRatio = i1135[14]
  i1134.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1135[15], i1135[16] )
  i1134.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1135[17], i1135[18] )
  i1134.m_autoSizeTextContainer = !!i1135[19]
  i1134.m_IsTextObjectScaleStatic = !!i1135[20]
  var i1137 = i1135[21]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 1, i1136, '')
  }
  i1134.m_fallbackFontAssets = i1136
  i1134.m_matchMaterialPreset = !!i1135[22]
  request.r(i1135[23], i1135[24], 0, i1134, 'm_defaultSpriteAsset')
  i1134.m_defaultSpriteAssetPath = i1135[25]
  i1134.m_enableEmojiSupport = !!i1135[26]
  i1134.m_MissingCharacterSpriteUnicode = i1135[27]
  i1134.m_defaultColorGradientPresetsPath = i1135[28]
  request.r(i1135[29], i1135[30], 0, i1134, 'm_defaultStyleSheet')
  i1134.m_StyleSheetsResourcePath = i1135[31]
  request.r(i1135[32], i1135[33], 0, i1134, 'm_leadingCharacters')
  request.r(i1135[34], i1135[35], 0, i1134, 'm_followingCharacters')
  i1134.m_UseModernHangulLineBreakingRules = !!i1135[36]
  return i1134
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1139 = data
  i1138.hashCode = i1139[0]
  request.r(i1139[1], i1139[2], 0, i1138, 'material')
  i1138.materialHashCode = i1139[3]
  request.r(i1139[4], i1139[5], 0, i1138, 'spriteSheet')
  var i1141 = i1139[6]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(request.d('TMPro.TMP_Sprite', i1141[i + 0]));
  }
  i1138.spriteInfoList = i1140
  var i1143 = i1139[7]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 1, i1142, '')
  }
  i1138.fallbackSpriteAssets = i1142
  i1138.m_Version = i1139[8]
  i1138.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1139[9], i1138.m_FaceInfo)
  var i1145 = i1139[10]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('TMPro.TMP_SpriteCharacter', i1145[i + 0]));
  }
  i1138.m_SpriteCharacterTable = i1144
  var i1147 = i1139[11]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(request.d('TMPro.TMP_SpriteGlyph', i1147[i + 0]));
  }
  i1138.m_SpriteGlyphTable = i1146
  return i1138
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1150 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.hashCode = i1151[1]
  i1150.unicode = i1151[2]
  i1150.pivot = new pc.Vec2( i1151[3], i1151[4] )
  request.r(i1151[5], i1151[6], 0, i1150, 'sprite')
  i1150.id = i1151[7]
  i1150.x = i1151[8]
  i1150.y = i1151[9]
  i1150.width = i1151[10]
  i1150.height = i1151[11]
  i1150.xOffset = i1151[12]
  i1150.yOffset = i1151[13]
  i1150.xAdvance = i1151[14]
  i1150.scale = i1151[15]
  return i1150
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1157 = data
  i1156.m_Name = i1157[0]
  i1156.m_HashCode = i1157[1]
  i1156.m_ElementType = i1157[2]
  i1156.m_Unicode = i1157[3]
  i1156.m_GlyphIndex = i1157[4]
  i1156.m_Scale = i1157[5]
  return i1156
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1161 = data
  request.r(i1161[0], i1161[1], 0, i1160, 'sprite')
  i1160.m_Index = i1161[2]
  i1160.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1161[3], i1160.m_Metrics)
  i1160.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1161[4], i1160.m_GlyphRect)
  i1160.m_Scale = i1161[5]
  i1160.m_AtlasIndex = i1161[6]
  i1160.m_ClassDefinitionType = i1161[7]
  return i1160
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1163 = data
  var i1165 = i1163[0]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('TMPro.TMP_Style', i1165[i + 0]));
  }
  i1162.m_StyleList = i1164
  return i1162
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.TMP_Style' )
  var i1169 = data
  i1168.m_Name = i1169[0]
  i1168.m_HashCode = i1169[1]
  i1168.m_OpeningDefinition = i1169[2]
  i1168.m_ClosingDefinition = i1169[3]
  i1168.m_OpeningTagArray = i1169[4]
  i1168.m_ClosingTagArray = i1169[5]
  i1168.m_OpeningTagUnicodeArray = i1169[6]
  i1168.m_ClosingTagUnicodeArray = i1169[7]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1171 = data
  var i1173 = i1171[0]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1173[i + 0]) );
  }
  i1170.files = i1172
  i1170.componentToPrefabIds = i1171[1]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1177 = data
  i1176.path = i1177[0]
  request.r(i1177[1], i1177[2], 0, i1176, 'unityObject')
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1179 = data
  var i1181 = i1179[0]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1181[i + 0]) );
  }
  i1178.scriptsExecutionOrder = i1180
  var i1183 = i1179[1]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1183[i + 0]) );
  }
  i1178.sortingLayers = i1182
  var i1185 = i1179[2]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1185[i + 0]) );
  }
  i1178.cullingLayers = i1184
  i1178.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1179[3], i1178.timeSettings)
  i1178.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1179[4], i1178.physicsSettings)
  i1178.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1179[5], i1178.physics2DSettings)
  i1178.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1179[6], i1178.qualitySettings)
  i1178.enableRealtimeShadows = !!i1179[7]
  i1178.enableAutoInstancing = !!i1179[8]
  i1178.enableDynamicBatching = !!i1179[9]
  i1178.lightmapEncodingQuality = i1179[10]
  i1178.desiredColorSpace = i1179[11]
  var i1187 = i1179[12]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( i1187[i + 0] );
  }
  i1178.allTags = i1186
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1191 = data
  i1190.name = i1191[0]
  i1190.value = i1191[1]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1195 = data
  i1194.id = i1195[0]
  i1194.name = i1195[1]
  i1194.value = i1195[2]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1199 = data
  i1198.id = i1199[0]
  i1198.name = i1199[1]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1201 = data
  i1200.fixedDeltaTime = i1201[0]
  i1200.maximumDeltaTime = i1201[1]
  i1200.timeScale = i1201[2]
  i1200.maximumParticleTimestep = i1201[3]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1203 = data
  i1202.gravity = new pc.Vec3( i1203[0], i1203[1], i1203[2] )
  i1202.defaultSolverIterations = i1203[3]
  i1202.bounceThreshold = i1203[4]
  i1202.autoSyncTransforms = !!i1203[5]
  i1202.autoSimulation = !!i1203[6]
  var i1205 = i1203[7]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1205[i + 0]) );
  }
  i1202.collisionMatrix = i1204
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1209 = data
  i1208.enabled = !!i1209[0]
  i1208.layerId = i1209[1]
  i1208.otherLayerId = i1209[2]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1211 = data
  request.r(i1211[0], i1211[1], 0, i1210, 'material')
  i1210.gravity = new pc.Vec2( i1211[2], i1211[3] )
  i1210.positionIterations = i1211[4]
  i1210.velocityIterations = i1211[5]
  i1210.velocityThreshold = i1211[6]
  i1210.maxLinearCorrection = i1211[7]
  i1210.maxAngularCorrection = i1211[8]
  i1210.maxTranslationSpeed = i1211[9]
  i1210.maxRotationSpeed = i1211[10]
  i1210.baumgarteScale = i1211[11]
  i1210.baumgarteTOIScale = i1211[12]
  i1210.timeToSleep = i1211[13]
  i1210.linearSleepTolerance = i1211[14]
  i1210.angularSleepTolerance = i1211[15]
  i1210.defaultContactOffset = i1211[16]
  i1210.autoSimulation = !!i1211[17]
  i1210.queriesHitTriggers = !!i1211[18]
  i1210.queriesStartInColliders = !!i1211[19]
  i1210.callbacksOnDisable = !!i1211[20]
  i1210.reuseCollisionCallbacks = !!i1211[21]
  i1210.autoSyncTransforms = !!i1211[22]
  var i1213 = i1211[23]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1213[i + 0]) );
  }
  i1210.collisionMatrix = i1212
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1217 = data
  i1216.enabled = !!i1217[0]
  i1216.layerId = i1217[1]
  i1216.otherLayerId = i1217[2]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1219 = data
  var i1221 = i1219[0]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1221[i + 0]) );
  }
  i1218.qualityLevels = i1220
  var i1223 = i1219[1]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( i1223[i + 0] );
  }
  i1218.names = i1222
  i1218.shadows = i1219[2]
  i1218.anisotropicFiltering = i1219[3]
  i1218.antiAliasing = i1219[4]
  i1218.lodBias = i1219[5]
  i1218.shadowCascades = i1219[6]
  i1218.shadowDistance = i1219[7]
  i1218.shadowmaskMode = i1219[8]
  i1218.shadowProjection = i1219[9]
  i1218.shadowResolution = i1219[10]
  i1218.softParticles = !!i1219[11]
  i1218.softVegetation = !!i1219[12]
  i1218.activeColorSpace = i1219[13]
  i1218.desiredColorSpace = i1219[14]
  i1218.masterTextureLimit = i1219[15]
  i1218.maxQueuedFrames = i1219[16]
  i1218.particleRaycastBudget = i1219[17]
  i1218.pixelLightCount = i1219[18]
  i1218.realtimeReflectionProbes = !!i1219[19]
  i1218.shadowCascade2Split = i1219[20]
  i1218.shadowCascade4Split = new pc.Vec3( i1219[21], i1219[22], i1219[23] )
  i1218.streamingMipmapsActive = !!i1219[24]
  i1218.vSyncCount = i1219[25]
  i1218.asyncUploadBufferSize = i1219[26]
  i1218.asyncUploadTimeSlice = i1219[27]
  i1218.billboardsFaceCameraPosition = !!i1219[28]
  i1218.shadowNearPlaneOffset = i1219[29]
  i1218.streamingMipmapsMemoryBudget = i1219[30]
  i1218.maximumLODLevel = i1219[31]
  i1218.streamingMipmapsAddAllCameras = !!i1219[32]
  i1218.streamingMipmapsMaxLevelReduction = i1219[33]
  i1218.streamingMipmapsRenderersPerFrame = i1219[34]
  i1218.resolutionScalingFixedDPIFactor = i1219[35]
  i1218.streamingMipmapsMaxFileIORequests = i1219[36]
  i1218.currentQualityLevel = i1219[37]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1229 = data
  i1228.weight = i1229[0]
  i1228.vertices = i1229[1]
  i1228.normals = i1229[2]
  i1228.tangents = i1229[3]
  return i1228
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1231 = data
  i1230.xPlacement = i1231[0]
  i1230.yPlacement = i1231[1]
  i1230.xAdvance = i1231[2]
  i1230.yAdvance = i1231[3]
  return i1230
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[98],"99":[19],"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"107":[101],"108":[109],"110":[109],"111":[109],"112":[109],"113":[109],"114":[109],"115":[109],"116":[109],"117":[109],"118":[109],"119":[109],"120":[109],"121":[109],"122":[19],"123":[3],"124":[125],"126":[125],"18":[10],"127":[11,128,10],"60":[10],"129":[19],"21":[19],"35":[34],"130":[131],"132":[10],"133":[10],"23":[18],"13":[11,10],"134":[10],"22":[18],"41":[10],"135":[10],"67":[10],"136":[10],"46":[10],"137":[10],"40":[10],"49":[10],"138":[10],"139":[11,10],"140":[10],"48":[10],"45":[10],"31":[10],"44":[11,10],"53":[10],"141":[36],"142":[36],"37":[36],"143":[36],"144":[19],"145":[19],"146":[131],"147":[10],"148":[3,10],"27":[10,11],"149":[10],"150":[11,10],"151":[3],"152":[11,10],"153":[10],"154":[131]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Case","UnityEngine.Shader","UnityEngine.BoxCollider","Bottle","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Texture2D","PuzzleManager","UnityEngine.GameObject","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIScaler","UnityEngine.UI.Button","ButtonPulse","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TextHint","TimerSlider","UnityEngine.UI.Slider","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 19:41:10";

Deserializers.lunaDaysRunning = "0.9";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1764";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4095";

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

Deserializers.buildID = "510ae070-6f9f-4857-872c-43399114b045";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

