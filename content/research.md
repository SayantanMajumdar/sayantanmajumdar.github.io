---
title: "Research"
draft: false
date: 2025-06-30T12:02:00+0530
lastmod: 2025-07-06T18:50:00+0530
publishDate: 2025-07-06T19:00:00+0530
---
My research lies at the intersection of *optimization theory*, *control theory*, 
*dynamic input recovery*, *dynamical systems theory*, *inverse theory*, and 
*trajectory optimization*. The general goal is to construct methods, techniques, 
or algorithms to recover the underlying dynamics of an unknown system and/or the 
underlying dynamics of the control signal driving the system, using a set of 
partial or complete measurements of the system. Specifically, my current Ph.D. 
research involved studying the underlying dynamics of the glucose-insulin system 
in an individual's body from their continuous glucose monitoring (CGM) trace 
which essentially is a discrete sequence of measurements of the glucose 
concentration in the intertitial fluid (ISF) of the individual.

## Estimating HbA1c  
I have succesfully obtained two methods for estimating HbA1c values for type 
2 diabetes (T2D) patients from their CGM trace and the research has been 
published in Majumdar et al., 2023 [^1]. I have also analyzed these methods of 
HbA1c estimation on CGM traces from type 1 diabetes (T1D) patients. The latter 
research has been provided in my thesis Majumdar, 2024 [^2]. 

## Estimating the continuous Blood Glucose Concentration (BG)  
I have also developed a method, based on trajectory optimization, to obtain an 
estimate of the continuous blood glucose concentration (BG) from a patients 
CGM trace. In this method we assume a simple dynamical system describing the 
dynamical relationship between BG and ISF. Collocation methods are used to 
discretize the continuous system and then a suitable set of discrete BG values 
are obtained which generates discrete ISF values as close as possible to the 
measured ISF, provided by the CGM trace. This is done by solving a nonlinear 
programming problem (NLP). The discrete BG value estimates are then suitably 
interpolated to obtain an estimate of the continuous BG. This research has been 
provided in my thesis Majumdar, 2024 [^2]. 

[^1]: Majumdar, Sayantan, et al. ***"Evaluation of HbA1c from CGM traces in an 
Indian population."*** Frontiers in Endocrinology 14 (2023): 1264072. 
DOI: [10.3389/fendo.2023.1264072](https://doi.org/10.3389/fendo.2023.1264072). 
URL: [https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2023.1264072/full](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2023.1264072/full) 

[^2]: Majumdar, Sayantan. ***"Analysis of Continuous Glucose Monitoring in 
relation to HbA1c and Interstitial Fluid Glucose."*** Diss. 2024. 
URL: [http://dr.iiserpune.ac.in:8080/xmlui/handle/123456789/9242](http://dr.iiserpune.ac.in:8080/xmlui/handle/123456789/9242) 
