# Copyright 2013 Eucalyptus Systems, Inc.
#
# Redistribution and use of this software in source and binary forms,
# with or without modification, are permitted provided that the following
# conditions are met:
#
#   Redistributions of source code must retain the above copyright notice,
#   this list of conditions and the following disclaimer.
#
#   Redistributions in binary form must reproduce the above copyright
#   notice, this list of conditions and the following disclaimer in the
#   documentation and/or other materials provided with the distribution.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
# "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
# LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
# A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
# OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
# LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
# DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
# THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
# (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
# OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

#
# This class defines an interface that must be extended for either talking
# to the CLC itself or for a testing mock
#
# NOTE: all methods are expected to return boto value objects.
#
class BalanceInterface(object):

    ##
    # elb methods
    ##
    def create_load_balancer(self, name, zones, listeners, subnets=None,
                             security_groups=None, scheme='internet-facing', callback=None):
        raise NotImplementedError("Are you sure you're using the right class?")
    
    def delete_load_balancer(self, name, callback=None):
        raise NotImplementedError("Are you sure you're using the right class?")

    def get_all_load_balancers(self, load_balancer_names=None, callback=None):
        raise NotImplementedError("Are you sure you're using the right class?")

    def deregister_instances(self, load_balancer_name, instances, callback=None):
        raise NotImplementedError("Are you sure you're using the right class?")

    def register_instances(self, load_balancer_name, instances, callback=None):
        raise NotImplementedError("Are you sure you're using the right class?")

    def create_load_balancer_listeners(self, name, listeners, callback=None):
        raise NotImplementedError("Are you sure you're using the right class?")

    def delete_load_balancer_listeners(self, name, ports, callback=None):
        raise NotImplementedError("Are you sure you're using the right class?")

    def configure_health_check(self, name, health_check, callback=None):
        raise NotImplementedError("Are you sure you're using the right class?")

    def describe_instance_health(self, load_balancer_name, instances=None, callback=None):
        raise NotImplementedError("Are you sure you're using the right class?")

