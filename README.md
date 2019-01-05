# GetStarted-Deploy-IBM-Cloud

# Work in progress...

Welcome to my "Get Started" series!

In this repository I am going to reuse my previous code from "GetStarted-TypeScript-Express-React" and show with detailed steps how to deploy this code into the cloud. The code is slightly modified in this repository to match the needs for deploying an application to the cloud, but the basics are the same.
Notice that the application does not do much, it is just a base setup and "Hellow world" frontend attached to it.

I have chosen IBM Cloud as no credit card or pre-information is needed in order to register or start working with it.

The guide can also orient new cloud users, or users which would like to learn more about how to work with cloud platforms a quick start.

I would recommend having some experience with the tooling on your PC or MAC such as command line, and some minimal previous understanding of code.

## Pre-requirements

Please go through the following in order to be able to work with IBM Cloud:

1. Register for a free account here: https://console.bluemix.net/registration

Note - No credit card is needed for a free registration nor for creating a simple application.

2. Get the IBM Cloud command line tools for your operating system: https://console.bluemix.net/docs/cli/reference/ibmcloud/download_cli.html#install_use

3. Command line:

- Windows: Windows regular command line should be enough.

- Mac: iTerm or the regular command line.

## Understanding the tools we will be using

### IBM Cloud - PaaS

The IBM cloud platform, like other providers is a PaaS. As described by Wikipedia:

"Platform as a Service (PaaS) or platform-based service is a category of cloud computing services that provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app"
https://en.wikipedia.org/wiki/Platform_as_a_service

PaaS is quite popular today in application development, those platforms allow us to run our application without worrying too much about computing power and infrastructure. As we will see later, we will be able to deploy our web application in the cloud using a couple of simple commands.

There are many big advantages of running on the cloud. Using a PaaS provider will not only allow us to run our application, but it has a full catalog of services which we can utilize in order to be more efficient and faster to production.

Note - Running application on the cloud is not always free, it is correct that we worry less about computing power and infrastructure, but if our computing and storage needs are huge, it will be wrong to say that no cost is associated with it.

### Cloud foundry

Cloud foundry is an open source cloud application platform (https://www.cloudfoundry.org/).
We will use cloud foundry in order to host our small web application on the IBM Cloud.
There are plenty of advantages for cloud foundry (or cf in short) which can be read on their website provided.
We use Cloud foundry as it allows us to easily setup and run our application. You can think about it as something that takes our code, puts it in a box and then places that box on the cloud.
This "box" will usually be aware of what code we are using, this is called "buildpack". For example, it is very popular today to run Javascript on the cloud using Node.js, this means that the buildpack recognized would be Node.js.

### Why do we use the command line?

I know not everyone is a fan of command line, as the user interface is super simple and not always very informative. In this case I think the command line would be the fastest way to get this application up and running.
